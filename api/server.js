const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
var cors = require("cors");
const apiRoutes = require("./routes/apiv0Routes");

app.use(cors());
app.use("/api/v0/", apiRoutes);
app.use("*", (req, res) => res.redirect("/api/v0/"));
app.use(errorHandler);

app.listen(port, () => console.log("Server started on port:", port));
