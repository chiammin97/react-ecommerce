
const express = require('express')
const data = require ("./data")
const app = express();

app.get("/api/products", (req, res) => {
    res.json(data.products);
})

app.listen(5000, () => {
    console.log("App listening at http://localhost:5000");
})