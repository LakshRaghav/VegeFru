import style from "../components/cart/cart.module.css"
import { MdDelete } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { BiDownArrowAlt } from 'react-icons/bi';
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Globalcontext } from "@/components/context/globalContext";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";
import { user_data } from "@/components/api/api";
import { getStorage } from "@/components/api/constant";


function ShopProducts() {

    const { cartData, addToCart, removeFromCart, re, data, context } = useContext(Globalcontext)
    const [subtotal, setsubtotal] = useState({ price: 0, quantity: 0 ,total_item: 0 });
    var initial_user = {
        first_name: "",
        email: "",
    }
    const [userdata, setuserdata] = useState(initial_user);
    async function getmydata() {
        const x = getStorage();
        const y = {};
        if (x.type == "login") {
            const response = await user_data(getStorage());
            setuserdata(response);
        }
    }

    function removeItem(id) {
        removeFromCart(cartData[id])
    }
    function Delete(id) {
        re(cartData[id])
    }
    const addItem=(id)=> {
        console.log(cartData[id])
        addToCart(cartData[id], 1);
      }
    const subto=()=>{
        var arr = cartData.map((items) => items.price * items.qty);
        var arr1 = cartData.map((items)=>items.qty);
        var sum = 0;
        var sumqty = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            sumqty += arr1[i];
        }
        setsubtotal({ ...subtotal, price:sum, quantity:cartData.length, total_item:sumqty })
    }
    useEffect(() => {
        getmydata()
        subto();
    }, [])
    return (
        <>
            <section className={` ${style.section}`}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className={style.navbar}>
                            <div className={style.leftnav}>
                                <h3 className={style.logo}>VEGEFRUIT</h3>
                            </div>
                            <div className={style.rightnav}>
                                <Link href="/" className={style.navlink}>Home</Link>
                                <Link href="/#about" className={style.navlink}>About</Link>
                                <Link href="/products" className={style.navlink}>Product</Link>
                                {data.auth == 0 ?
                                    <Link href="/login" className={style.navlink1}>LogIn | Register</Link>
                                    :
                                    <Dropdown className={style.drpdwn}>
                                        <Dropdown.Toggle className={style.toggle} id="dropdown-basic">
                                        {userdata.first_name}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>{userdata.email}</Dropdown.Item>
                                            <button onClick={context.logout} className={style.logout}>Logout</button>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                }
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className={`${style.heading}`}>Shopping Cart</h3>
                            </div>
                            {
                                cartData.length > 0 ? cartData.map((cart, index) => (<div className="card rounded-3 mb-4" key={index}>
                                    <div className="card-body p-3">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <Image
                                                    src={`${cart.image}`}
                                                    width={70}
                                                    height={70}
                                                    className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2">{cart.name}</p>
                                                <p><span className="text-muted">Offer % :</span>  <span className="text-muted">{`${cart.offer}%`} </span></p>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button className="btn btn-link px-2" onClick={()=>{removeItem(index),subto()}}>
                                                    <FiMinus />
                                                </button>

                                                <input id="form1" min="0" name="quantity" value={cart.qty} type="number"
                                                    className="form-control form-control-sm" />

                                                <button className="btn btn-link px-2" onClick={()=>{addItem(index),subto()}}>
                                                    <BsPlusLg />
                                                </button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0">₹{((((cart.price)) * (cart.qty))-(((cart.offer)*((cart.price)*(cart.qty)))*0.01))}</h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <MdDelete onClick={()=>{Delete(index)}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )) : <p style={{color:"red"}}>Cart Item Not Available, Buy From Product Section</p>
                            }
                            
                            <div className={`card ${style.subtotalcard}`}>
                            <div className="col-lg-4 col-xl-3 ms-auto" >
                                <div className="d-flex content justify-content-between" >
                                    <p className="mb-2 me-4">Subtotal:</p>
                                    <p className="mb-2 me-2">₹ {subtotal.price}</p>
                                </div>
                                <div className="d-flex content justify-content-between" >
                                    <p className="mb-0">Total item:</p>
                                    <p className="mb-0 me-2">{subtotal.quantity}</p>
                                </div>
                                <div className="d-flex content justify-content-between" >
                                    <p className="mb-0 me-5">Total Quantity:</p>
                                    <p className="mb-0 me-2">{subtotal.total_item}</p>
                                </div>
                            </div>
                                <div className="card-body d-flex">
                                    <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                    <h2 className={style.subtotal}>₹ {subtotal.price}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default ShopProducts