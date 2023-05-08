import { useEffect, useReducer, useState } from "react"
import { Globalcontext } from "./globalContext";
import Authentication from "./reducer";
import { clearStorage, getStorage } from "../api/constant";
import data from "../../../data.json";


export default function ContextState(props)
{
const Globaldata =
{
    first_name: "",
    token:"",
    status:"",
    message:"",
    type:"",
    auth: 0
}
    const [cartItem,setcartItem] = useState([]);
    const [globalstate, setglobalstate] = useReducer(Authentication, Globaldata);

    const login_user = (data) => {
        setglobalstate(data);
    }
    const logout_user = () => {                
        setglobalstate(clearStorage())
    }
    const contextdata = {
        login: login_user,
        logout: logout_user,
    }    
    function addToCart(product,quantity)
    {
        console.log(product);
        const productAlreadyInCart = cartItem.find((x) => x.id === product.id);
        if(productAlreadyInCart)
        {
            setcartItem(cartItem.map((x) => (x.id === product.id ? { ...productAlreadyInCart, qty:productAlreadyInCart.qty + quantity}:x )));
        }
        else{
            setcartItem([...cartItem, {...product, qty: quantity }])
        }
    }
    function removeFromCart(product)
    {
        const remove = cartItem.find((x) => x.id === product.id)
        if(remove.qty == 1)
        {
            setcartItem(cartItem.filter((x) => x.id !== product.id))
        }
        else{
            setcartItem(cartItem.map((x) => (x.id == product.id ? {...remove, qty: remove.qty - 1}:x)))
        }
    }
    useEffect(()=>{
        if(localStorage.getItem("login-info")){
            setglobalstate(getStorage());
        }
    },[])
    return(
        <>
            <Globalcontext.Provider value={{product:data.data,cartData:cartItem, addToCart:addToCart,
                 removeFromCart:removeFromCart, data:globalstate, context:contextdata}}>
                {props.children}
            </Globalcontext.Provider>
        </>
    )
}