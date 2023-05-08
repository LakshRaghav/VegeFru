import mongoose from 'mongoose'
require("../config/database");

const USERSCHEMA = new mongoose.Schema({
    first_name:{type:String},
    last_name:{type:String},
    email:{type:String,unique:[true, "Email Already Exists! Should be unique"],required:[true, "Please enter email"]},
    password:{type:String}, 
    phone:{type:Number,unique:[true, "Phone Number Should be Unique"]},
},{timestamps:true})

mongoose.models ={};
const userSchema = mongoose.model.user_profiles || mongoose.model("user_profiles",USERSCHEMA);
export default userSchema;