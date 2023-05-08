import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then((response)=>{
    console.log("Connected to database")
})