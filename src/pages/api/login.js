import Constant from "@/constant/Constant";
import userSchema from "@/models/userSchema";

export default async (request, response) => {
    if (request.method == "POST") {
        const res = {};
        try {
            const body = request.body;
            const data = await userSchema.findOne({ email: body.email });
            if (data){
                const result = Constant.compare_password(body.password, data.password);
                if (result) {
                    const token = Constant.generate_token({email:data.email, userId:data._id.toString()})           
                    res.message = "successfully logged In";
                    res.status = "success";
                    res.token = token;
                }
                else {
                    res.message = "Login Failed";
                    res.status = "failed";
                }
            }
            else {
                res.message = "email does not exist!"
                res.status = "failed"
            }
            response.json(res);
        } catch (error) {
            res.message = "error has occured";
            res.status = "failed";
            res.error = error;
            response.json(res);
        }
    }
    else{
        const respond = {};
        respond.status = false;
        respond.message = "Wrong Call Method";
        response.json(respond)
    }
}