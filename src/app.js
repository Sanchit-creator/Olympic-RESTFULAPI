const express = require('express');
require("../src/db/conn")

const MensRanking = require('../src/models/mens');
const router = require('./routers/mens');

const app = express();
const port = process.env.PORT || 2000;
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`connection established at ${port}`);
})


