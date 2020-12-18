const express = require("express")
require("dotenv").config();
const app = express();
const router = require("./routes/router");
const connectDb = require("./models/connectDB")

connectDb()
app.use(express.json());

app.use("/api", router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});