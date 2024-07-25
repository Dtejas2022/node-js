const express = require('express');
require("./config");
const Products = require("./products");

const app = express();

app.use(express.json());
app.post("/create",(req,res)=>{
    let data = new products(req.body);
    let result = data.save();
    res.send("done");
});

app.listen(3000);