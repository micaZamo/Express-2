const express=require("express");
const app=express();

app.get("/", function (req, res){
    console.log(req);
    res.sendFile(__dirname + "/index.html");  
});

app.listen(3037)