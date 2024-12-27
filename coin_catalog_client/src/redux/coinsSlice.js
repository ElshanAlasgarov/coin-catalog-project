import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  coins: [],
  coin: {},
  isLoading: false,
  error: false,
};

export const getCoinsByCategoryId = createAsyncThunk(
  `get coins by id`,
  async (id) => {
    const response = await axios.get(`http://localhost:4000/api/coins/${id}`);
    return response.data;
  }
);


export const getCoinsAdvancedFilter = createAsyncThunk(
  "getCoinsAdvancedFilter",
  async (request, { rejectWithValue }) => {
    try {
      const queryParams = new URLSearchParams();
      if (request.country) queryParams.append("country", request.country);
      if (request.metal) queryParams.append("metal", request.metal);
      if (request.quality) queryParams.append("quality", request.quality);
      if (request.price?.from) queryParams.append("price-from", request.price.from);
      if (request.price?.to) queryParams.append("price-to", request.price.to);
      if (request.year?.from) queryParams.append("year-from", request.year.from);
      if (request.year?.to) queryParams.append("year-to", request.year.to);

      const response = await axios.get(
        `http://localhost:4000/api/coins/?${queryParams.toString()}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching advanced filter results:", error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteCoinById = createAsyncThunk(
  "coins/deleteCoinById",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id)
      const response = await axios.delete(
        `http://localhost:4000/api/coins/${+id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const updateCoin = createAsyncThunk(
  "coins/updateCoin",
  async (request) => {
    console.log(request);
    const response = await axios.put(
      `http://localhost:4000/api/coins/${request.CoinId}`,
      request
    );
    return response.data;
  }
);

export const addCoin = createAsyncThunk("coins/add-coin", async (request) => {
  console.log(request);
  const response = await axios.post(`http://localhost:4000/api/coins/`, request);
  return response.data
});

export const getCoinsByInputRequest = createAsyncThunk(
  `getCoinsBySearchQuery`,
  async (request) => {
    console.log("Request URL: http://localhost:4000/api/coins?q=", request);

    const response = await axios.get(`http://localhost:4000/api/coins?q=${request}`);

    return response.data;
  }
);

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    removeCoinInListById: (state, action) => {
      state.coins = state.coins.filter((coin) => coin.CoinId != action.payload);
    },
    updateCoinState: (state, action) => {
      state.coins = state.coins.filter(
        (coin) => coin.CoinId !== action.payload.CoinId
      );
      state.coins = [action.payload, ...state.coins];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoinsByCategoryId.fulfilled, (state, action) => {
      state.coins = action.payload;
      state.isLoading = false;
      state.error = false;
    }),
      builder.addCase(getCoinsByCategoryId.rejected, (state, action) => {
        console.log(action.payload, "middlewarede rejected");
        state.isLoading = false;
        state.error = false;
      }),
      builder.addCase(getCoinsByInputRequest.fulfilled, (state, action) => {
        state.coins = action.payload;
        state.isLoading = false;
        state.error = false;
      }),
      builder.addCase(getCoinsByInputRequest.rejected, (state, action) => {
        console.log(action.payload, "middlewarede rejected");
        state.isLoading = false;
        state.error = false;
      }),
      builder.addCase(deleteCoinById.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = false;
      }),
      builder.addCase(getCoinsAdvancedFilter.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      builder.addCase(getCoinsAdvancedFilter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.coins = action.payload;  
      })
      builder.addCase(getCoinsAdvancedFilter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "An error occurred.";
      });
  },
});

export const { removeCoinInListById, updateCoinState } = coinsSlice.actions;
export default coinsSlice.reducer;
