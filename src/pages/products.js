import Link from "next/link";
import style from "../components/dashboard/products.module.css";
import { Card, Dropdown } from "react-bootstrap";
import { Globalcontext } from "@/components/context/globalContext";
import { useContext, useEffect, useState } from "react";
import { user_data } from "@/components/api/api";
import { getStorage } from "@/components/api/constant";
import { MdLocalOffer } from "react-icons/md"
import Cart from "@/components/cart/cart";

export default function Product() {
    const { product, data, context } = useContext(Globalcontext);
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
    useEffect(() => {
        if (localStorage.getItem("login-info")) {
            getmydata()
        }
    }, [])
    return (
        <>
            <div>
                <div className={`${style.wi10} ${style.df} ${style.jcc}`}>
                    <div className={`${style.wi10} ${style.navbar} ${style.df}`}>
                        <div className={`${style.wi2} ${style.logo}`}>
                            <h4 className={style.logoname}>VEGEFRUIT</h4>
                        </div>
                        <div className={`${style.wi8} ${style.linkbar}`}>
                            <div className={`${style.wi10}`}>
                            <Link href="/" className={`${style.navlink}`}>Home</Link>
                            <Link href="/#about" className={`${style.navlink}`}>About</Link>
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
                            <Link href="/addtocart" className={`${style.navlink}`}><Cart /></Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className={`${style.wi15} ${style.leftside}`}>

                    </div> */}
                    <div className={`${style.wi10} ${style.rightside} ${style.df}`}>
                        {
                            product.map((x,index)=>
                            <Card className={style.card} key={index}>
                                {
                                    x.offer >0? 
                                    <><p className={style.offericon}>{x.offer}<MdLocalOffer  className={style.icon}/></p></>
                                    :
                                    <></>
                                }                                
                            <Card.Img src={`${x.image}`} className={style.card_image} />
                            <Card.Body className={style.card_body}>
                                <p className={style.card_title}>{x.product_name}</p>
                                <div className={style.card_price}>                                   
                                    {
                                        x.offer == 0 ? <p>{`₹ ${x.price} / ${x.unit}`}</p> :<h5 className={style.offer}>{`₹ ${(x.price)-(((x.offer)*x.price)*0.01)} / ${x.unit}`}<p className={style.offer1}>{`${x.price} / ${x.unit}`}</p></h5>
                                    }
                                </div>
                                <div className={style.card_text}>
                                    <p className={style.subdesc}>-{x.subdescription[0]}</p>
                                    <p className={style.subdesc}>-{x.subdescription[1]}</p>    
                                </div>
                                <Link href={`/${x.id}`}><button className={style.card_button}>Shop now</button></Link>
                            </Card.Body>
                        </Card> 
                            )
                        }                  
                    </div>
                </div>
            </div>
        </>
    )
}