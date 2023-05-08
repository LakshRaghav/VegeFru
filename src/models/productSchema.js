import mongoose from 'mongoose'
require("../config/database");

const PRODUCT_SCHEMA = new mongoose.Schema({
   
},{timestamps:true})

// USERSCHEMA.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       next();
//     }
//     this.password = await bcrypt.hash(this.password, 10);
//   });

mongoose.models ={};
const product_Schema = mongoose.model.products || mongoose.model("products",PRODUCT_SCHEMA);
export default product_Schema;