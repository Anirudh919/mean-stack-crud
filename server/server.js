const express = require('express');
const apiRouter = require("./routes");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(
    bodyParser.urlencoded({
        extended: false,
    })

);
app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);
app.listen(process.env.PORT || '3000', () => {
    console.log(`server is running on port    : ${process.env.PORT || "3000"}`);
});