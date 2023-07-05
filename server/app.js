const express = require("express")
require("./db/conn");
const app = express();
const router = require("./routes/router")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const port = 8009;

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use(router);

app.listen(port,()=>{
    console.log(`server started at port : ${port}`);
})