const express = require("express");
const path = require("path");

const app = express();
port = 3000;
const publicpath = path.join(__dirname,'public');

// app.use(express.static(publicpath));

// console.log(__dirname)
app.set('view engine', 'ejs');

app.get("/",(req, resp)=>{
    resp.send("<h1>this is home page</h1>");
});

app.get("/about",(req, resp)=>{
    resp.send("<h1>this is about page</h1>");
});

app.get("/profile",(req, resp)=>{

    const user = {
        name : "tejas",
        city: "nanded"
    }
    resp.render('profile',);

});

app.listen(port,()=>{
    console.log(`server runing on port ${port}`);
});