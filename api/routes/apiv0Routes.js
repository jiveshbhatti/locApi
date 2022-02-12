const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const { getTokenBalance } = require("../controllers/apiv0Routes");

router.get("/:erc/:token", getTokenBalance);
router.get("*", (req, res) =>
  res.status(404).send("404 page not found! Check params")
);

module.exports = router;
