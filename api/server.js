const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const apiRoutes = require("./routes/apiv0Routes");

app.use("/api/v0/", apiRoutes);
app.use(errorHandler);

app.listen(port, () => console.log("Server started on port:", port));
