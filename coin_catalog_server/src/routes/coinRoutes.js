const express = require("express");
const {
  getCoins,
  getCoinById,
  addCoin,
  updateCoin,
  deleteCoin,
  getCoinsAdvancedFilter
} = require("../controllers/coinController");

const router = express.Router();

router.get("/", getCoinsAdvancedFilter);
router.get("/", getCoins);
router.get("/:id", getCoinById);
router.post("/", addCoin);
router.put("/:id", updateCoin);
router.delete("/:id", deleteCoin);

module.exports = router;
