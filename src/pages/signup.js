import style from "../components/auth/auth.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signup_Data } from "@/components/api/api";
import { setStorage } from "@/components/api/constant";
import { useContext } from "react";
import { Globalcontext } from "@/components/context/globalContext";
import { useRouter } from "next/router";


export default function Signup() {

    const router = useRouter();
    const {context} = useContext(Globalcontext);
    const initial_state = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: ""
    }
    const [sdata, setdata] = useState(initial_state);
    function onvaluechange(event) {
        setdata({ ...sdata, [event.target.name]: event.target.value })
    }
    async function validateForm(event)
    {
        event.preventDefault();
        if (Object.values(sdata).every(v=>v!="")) {
            const response = await signup_Data(sdata);
            console.log(response)
            if(response.status == "success"){
                const result = {...response};
                result.type = "login"
                setStorage(result);
                context.login(result);        
                router.push("/")
            }         
            else if(response.status=="failed"){
                alert(`${response.message}`)
            }
        }
        else {
            alert("Please fill all Important fields");
        }
    }
    return (
        <>
            <div className={`${style.wi10} ${style.login_page}`}>
                <div className={`${style.wi10} ${style.df} ${style.login_backgrnd}`}>
                    <Image src={"/logn.png"} width={270} height={300} className={style.login_image} />
                    <div className={`${style.wi7} ${style.leftdiv}`}>

                    </div>
                    <div className={`${style.wi3} ${style.rightdiv}`}>
                    </div>
                </div>
                <div className={`${style.wi6} ${style.df} ${style.signup_div} ${style.jcc}`}>
                    <Link href="/"><h3 className={style.logo}>VEGEFRUIT</h3></Link>
                    <div className={`${style.wi8} ${style.signup}`}>
                        <p  className={style.link1}>Already have an account.......<Link href="/login">Log In</Link></p>
                        <form onSubmit={validateForm}>
                            <label className={style.label}>First name</label>
                            <input type={"input"} className={style.input1} placeholder="First name" name="first_name" onChange={onvaluechange}/>
                            <label className={style.label}>Last name</label>
                            <input type={"input"} className={style.input1} placeholder="Last name" name="last_name" onChange={onvaluechange}/>
                            <label className={style.label}>Username</label>
                            <input type={"input"} className={style.input1} placeholder="Email" name="email" onChange={onvaluechange}/>
                            <label className={style.label}>Phone</label>
                            <input type={"input"} className={style.input1} placeholder="Phone" name="phone" onChange={onvaluechange}/>
                            <label className={style.label}>Password</label>
                            <input type={"input"} className={style.input1} placeholder="Password" name="password" onChange={onvaluechange}/>
                            <button className={style.input_btn} type={"submit"}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
