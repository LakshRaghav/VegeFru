import Constant from "@/constant/Constant";
import userSchema from "@/models/userSchema";

export default async (request, response) => {
    if (request.method == 'POST') {
        const res = {};
        try {
            const body = request.body;
            console.log(body)
            body.password = await Constant.encrypt(body.password);            
            const result = await userSchema.create(body);
            console.log(result);
            if (result) {
                const token = await Constant.generate_token({first_name:result.first_name,userId:result._id.toString()});
                res.status = "success";
                res.message = "Successfully created an account";
                res.token = token
            }
            else {
                res.status = "failed";
                res.message = "couldn't save to database";
            }            
            response.json(res);
        } catch (error) {
          console.log(error)
            response.json({status:"failed"});
        }
    }
    else {
        const respond = {};
        respond.status = "failed";
        respond.message = "Wrong Call Method";
        response.json(respond)
    }
}