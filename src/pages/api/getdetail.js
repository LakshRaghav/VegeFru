import Constant from "@/constant/Constant";
import userSchema from "@/models/userSchema";

export default async(request, response)=>{
    const res = {};
    try {        
        const requiredata = {};
        const data = request.headers.authorization.split(" ")[1];
        const tokendata = Constant.decode_token(data);
        if (tokendata) {
            const userdata = await userSchema.findOne({ _id: tokendata.userId })
            if (userdata) {
                res.status = "success"
                res.message = "Found your data"
                res.email = userdata.email
                res.first_name = userdata.first_name
                res.phone = userdata.phone
            }
            else {
                res.status = "failed"
                res.message = "Couldn't find your data"
            }            
        }
        response.json(res)
    } catch (error) {
        res.status = "failed"
        if (error.name == "ValidationError") {
            let errors = {};
            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });
            res.error = errors;
        }
        response.json(res)
    }
}