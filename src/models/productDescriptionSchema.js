import mongoose from 'mongoose'
require("../config/database");

const PRODUCT_DESCRIPTION_SCHEMA = new mongoose.Schema({
    
},{timestamps:true})

// USERSCHEMA.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       next();
//     }
//     this.password = await bcrypt.hash(this.password, 10);
//   });

mongoose.models ={};
const product_Description_Schema = mongoose.model.product_description || mongoose.model("product_description",PRODUCT_DESCRIPTION_SCHEMA);
export default product_Description_Schema;