import { useContext, useEffect, useState } from "react";
import style from "./cart.module.css";
import { BsCart4 } from "react-icons/bs"
import { Globalcontext } from "../context/globalContext";

export default function Cart()
{
    const {cartData} = useContext(Globalcontext);
    var [state,setstate] = useState("block");
        function update()
        {
            if (cartData.length < 0) {
                setstate("none");
            }
            else {
                setstate("block");
            }
        }
    useEffect(() => {
        update()
    }, [])
    return(
        <>
            <div className={`${style.wicart} ${style.df} ${style.cart}`}>
                <p className={style.cart_item} style={{display:state}}>{cartData.length}</p>
                <div className={`${style.wi8}`}>
                    <BsCart4 className={style.cart_icon} />
                </div>
            </div>
        </>
    )
}