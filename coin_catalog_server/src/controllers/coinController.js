const connection = require("../config/db");

const getCoins = (req, res) => {
  const searchQuery = req.query.q || ''; 
  console.log("Search Query:", searchQuery);

  if (!searchQuery.trim()) {
    return res.status(200).json([]);
  }

  connection.query(
    `SELECT * FROM coins WHERE CoinAbout LIKE ?`,
    [`%${searchQuery}%`],
    (error, results) => {
      if (!error) {
        res.status(200).json(results);
      } else {
        console.error("Error executing query:", error.message);
        res.status(500).json({ error: "An error occurred while fetching coins." });
      }
    }
  );
};


const getCoinById = (req, res) => {
  const { id } = req.params;
  connection.query(
    `SELECT coins.*, categories.CategoryName FROM coins 
     JOIN categories ON coins.CategoryId = categories.CategoryId 
     WHERE coins.CategoryId = ?`,
    [id],
    (error, results) => {
      if (!error) {
        res.status(200).json(results);
      } else {
        console.error("Error executing query:", error.message);
        res.status(500).json({ error: error.message });
      }
    }
  );
};

const addCoin = (req, res) => {
  const {
    CoinName,
    CoinAbout,
    IssuingCountry,
    Composition,
    Quality,
    Denomination,
    year,
    Weight,
    Price,
    CategoryId,
  } = req.body;

  connection.query(
    `INSERT INTO coins (CoinName, CoinAbout, IssuingCountry, Composition, Quality, Denomination, year, Weight, Price, CategoryId)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [CoinName, CoinAbout, IssuingCountry, Composition, Quality, Denomination, year, Weight, Price, CategoryId],
    (error, results) => {
      if (!error) {
        res.status(201).json({ id: results.insertId });
      } else {
        console.error("Error executing query:", error.message);
        res.status(500).json({ error: error.message });
      }
    }
  );
};

const updateCoin = (req, res) => {
  const { id } = req.params;
  const {
    CoinName,
    CoinAbout,
    IssuingCountry,
    Composition,
    Quality,
    Denomination,
    year,
    Weight,
    Price,
    CategoryId,
  } = req.body;

  console.log("Request Body:", req.body);
  console.log("Request Params:", req.params);

  connection.query(
    `UPDATE coins SET CoinName = ?, CoinAbout = ?, IssuingCountry = ?, Composition = ?, Quality = ?, 
     Denomination = ?, year = ?, Weight = ?, Price = ?, CategoryId = ? WHERE CoinId = ?`,
    [CoinName, CoinAbout, IssuingCountry, Composition, Quality, Denomination, year, Weight, Price, CategoryId, id],
    (error, results) => {
      if (!error) {
        res.status(200).json({ message: "Coin updated successfully" });
      } else {
        console.error("Error executing query:", error.message);
        res.status(500).json({ error: error.message });
      }
    }
  );
};

const deleteCoin = (req, res) => {
  const { id } = req.params;
  console.log(id)
  connection.query(
    `DELETE FROM coins WHERE CoinId = ?`,
    [id],
    (error, results) => {
      if (!error) {
        res.status(200).json({ message: "Coin deleted successfully" });
      } else {
        console.error("Error executing query:", error.message);
        res.status(500).json({ error: error.message });
      }
    }
  );
};

const getCoinsAdvancedFilter = (req, res) => {
  const { country, metal, quality, "price-from": priceFrom, "price-to": priceTo, "year-from": yearFrom, "year-to": yearTo } = req.query;

  let query = `SELECT * FROM coins WHERE 1=1`;

  const params = [];
  if (country) {
    query += ` AND IssuingCountry = ?`;
    params.push(country);
  }
  if (metal) {
    query += ` AND Composition = ?`;
    params.push(metal);
  }
  if (quality) {
    query += ` AND Quality = ?`;
    params.push(quality);
  }
  if (priceFrom) {
    query += ` AND Price >= ?`;
    params.push(priceFrom);
  }
  if (priceTo) {
    query += ` AND Price <= ?`;
    params.push(priceTo);
  }
  if (yearFrom) {
    query += ` AND year >= ?`;
    params.push(yearFrom);
  }
  if (yearTo) {
    query += ` AND year <= ?`;
    params.push(yearTo);
  }

  connection.query(query, params, (error, results) => {
    if (!error) {
      res.status(200).json(results);
    } else {
      console.error("Error executing query:", error.message);
      res.status(500).json({ error: error.message });
    }
  });
};

module.exports = { getCoins, getCoinById, addCoin, updateCoin, deleteCoin, getCoinsAdvancedFilter };
