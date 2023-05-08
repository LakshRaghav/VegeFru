import mongoose from 'mongoose'
require("../config/database");

const VENDOR_SCHEMA = new mongoose.Schema({
   
},{timestamps:true})

// USERSCHEMA.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       next();
//     }
//     this.password = await bcrypt.hash(this.password, 10);
//   });

mongoose.models ={};
const vendor_Schema = mongoose.model.products || mongoose.model("products",VENDOR_SCHEMA);
export default vendor_Schema;