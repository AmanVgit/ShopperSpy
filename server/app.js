const express = require("express")
require("./db/conn");
const app = express();
const port = 8009;

app.get("/",(req,res)=>{
    res.status(201).json("server created")
});

app.listen(port,()=>{
    console.log(`server started at port : ${port}`);
})