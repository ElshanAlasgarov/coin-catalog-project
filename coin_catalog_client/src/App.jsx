import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import NotFountPage from "./pages/NotFoundPage/NotFountPage";
import CategoryCoins from "./components/Category-coins/CategoryCoins";
import SearchListPage from "./pages/ListPage/SearchListPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import EditOrAddCoin from "./components/EditOrAddCoin/EditOrAddCoin";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/AdminPanel/edit/:name" element={<EditOrAddCoin/>} />
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<CategoryCoins />} />
        <Route path="/categories/:id" element={<SearchListPage />} />
        <Route path="/categories/:id/:name" element={<DetailsPage />} />
        <Route path="/*" element={<NotFountPage />} />
      </Routes>
    </div>
  );
}

export default App;
