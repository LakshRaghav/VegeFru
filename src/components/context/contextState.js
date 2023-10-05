import { useEffect, useMemo, useReducer, useState } from "react"
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
    const [q,setquantity] = useState(0);
    // let price=0,quant,total_item=0;
    const [subtotal,settotal] = useState({price:0,quantity:0,total_item:0});
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
    function subto(){
        var arr = cartItem.map((items) => ((((items.price)) * (items.qty))-(((items.offer)*((items.price)*(items.qty)))*0.01)));
        var arr1 = cartItem.map((items)=>items.qty);
        var sum = 0;
        var sumqty = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            sumqty += arr1[i];
        }
        // price = sum;
        // quant = cartItem.length;
        // total_item = sumqty;
        settotal({...subtotal,price:sum,qunat:cartItem.length,total_item:sumqty});
    }
    function addToCart(product,quantity)
    {
        const productAlreadyInCart = cartItem.find((x) => x.id === product.id);
        if(productAlreadyInCart)
        {
            setcartItem(cartItem.map((x) => (x.id === product.id ? { ...productAlreadyInCart, qty:productAlreadyInCart.qty + quantity}:x )));
            setquantity(productAlreadyInCart.qty + quantity);
        }
        else{
            setcartItem([...cartItem, {...product, qty: quantity }])
            setquantity(1);
        }
    }
    function removeFromCart(product)
    {
        const remove = cartItem.find((x) => x.id === product.id)
        if(remove.qty == 1)
        {
            setcartItem(cartItem.filter((x) => x.id !== product.id))
            setquantity(0);
        }
        else{
            setcartItem(cartItem.map((x) => (x.id == product.id ? {...remove, qty: remove.qty - 1}:x)))
            setquantity(remove.qty-1);
        }
    }
    function remove(product)
    {
            setcartItem(cartItem.filter((x) => x.id !== product.id))
            setquantity(0);
    }
    useMemo(()=>{
        subto();
},[q]);
    useEffect(()=>{
        if(localStorage.getItem("login-info")){
            setglobalstate(getStorage());
        }
    },[])
    return(
        <>
            <Globalcontext.Provider value={{product:data.data,cartData:cartItem, addToCart:addToCart,
                 removeFromCart:removeFromCart, re:remove, data:globalstate, context:contextdata, subtot:subtotal, totalSum:subto}}>
                {props.children}
            </Globalcontext.Provider>
        </>
    )
}