import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Constant= {
    email_validation:async function(email)
    {
        return String(email).toLowerCase().match(/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/)
    },
    encrypt:async function(password)
    {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password,salt)
        return password;
    },
    compare_password:function(password,hashcode)
    {
        const response = bcrypt.compareSync(password,hashcode)
        return response;
    },
    generate_token:function(data)
    {
        return jwt.sign(data,process.env.SECRET_KEY,{expiresIn:'10d'})
    },
    decode_token:function(token)
    {
        return jwt.decode(token)
    }
}
export default Constant; 