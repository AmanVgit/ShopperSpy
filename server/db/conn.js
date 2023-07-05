const mongoose = require("mongoose")
const DB = "mongodb+srv://Drax09:aman_codes@cluster0.8xwasga.mongodb.net/ShopperSpy?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("Database Connected")).catch((err)=>{
    console.log(err);
})