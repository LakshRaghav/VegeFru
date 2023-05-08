import { Button, NavLink } from "react-bootstrap";
import style from "../components/auth/auth.module.css";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { login_Data } from "@/components/api/api";
import { useRouter } from "next/router";
import { setStorage } from "@/components/api/constant";
import { Globalcontext } from "@/components/context/globalContext";


export default function Login() {

    const {context} = useContext(Globalcontext);
    const router = useRouter();
    const initial = {
        email: "",
        password: ""
    } 

    const [fdata,setfdata] = useState(initial)
    function onvaluechange(event) {
        setfdata({...fdata,[event.target.name]: event.target.value})
    }
    async function validateForm(event)
    {
        event.preventDefault();        
        if(Object.values(fdata).every(v=>v!="")){
            const response  = await login_Data(fdata);
            if(response.status == "success"){
                console.log(response);
                const result = {...response};
                result.type = "login";
                setStorage(result);
                context.login(result);
                router.push("/")
            }
            else if(response.status=="failed"){
                alert(`${response.message}`);
            }
        }
        else{
            alert("Please fill all the fields");
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
                <div className={`${style.wi6} ${style.df} ${style.login_div} ${style.jcc}`}>                    
                    <Link href="/"><h3 className={style.logo}>VEGEFRUIT</h3></Link>
                    <div className={`${style.wi8} ${style.login}`}>
                        <p  className={style.link}>Doesn't have an account.......<Link href="/signup">Register</Link></p>
                        <form onSubmit={validateForm}>
                            <label className={style.label}>Username/Phone</label>
                            <input type={"input"} className={style.input} placeholder="Username" name="email" onChange={onvaluechange}/>
                            <label className={style.label}>Password</label>
                            <input type={"input"} className={style.input} placeholder="Password" name="password" onChange={onvaluechange}/>
                            <button className={style.input_btn} type={"submit"}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}