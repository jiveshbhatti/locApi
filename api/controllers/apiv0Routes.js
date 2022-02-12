const asyncHandler = require("express-async-handler");
const axios = require("axios");
//@desc Get balance of ERC-20 token.
//@route GET /api/v0/
//@access Private

const getTokenBalance = asyncHandler(async (req, res) => {
  const { erc, token } = req.params;
  const response = await axios.get(
    `${process.env.ETHER_URL}?module=account&action=tokenbalance&contractaddress=${erc}&address=${token}&tag=latest&apikey=${process.env.ETHER_API}`
  );

  if (response.data.status === "0") {
    throw new Error(response.data.result);
  }
  res.status(200).send(response.data.result);
});

module.exports = {
  getTokenBalance,
};
