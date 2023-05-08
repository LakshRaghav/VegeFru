import mongoose from 'mongoose'
require("../config/database");

const ADMIN_SCHEMA = new mongoose.Schema({
   admin_name:{type:String},
   email:{type:String,unique:true,required:[true,"Email must be entered !"]},
   password:{type:String},
   image:{type:String},
   role:{type:String,}

},{timestamps:true})
mongoose.models ={};
const admin_Schema = mongoose.model.products || mongoose.model("products",ADMIN_SCHEMA  );
export default admin_Schema;