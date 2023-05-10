import Image from "next/image";
import style from "../components/product/productview.module.css";
import { useContext, useEffect, useState } from "react";
import { Dropdown, ProgressBar } from "react-bootstrap";
import { Globalcontext } from "../components/context/globalContext";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai"
import Cart from "../components/cart/cart";
import { useRouter } from "next/router";
import { getStorage } from "@/components/api/constant";
import { user_data } from "@/components/api/api";

export default function View() {
  const { cartData, addToCart, product, data, context } = useContext(Globalcontext)
  const obj = {
    id: 0,
    category: "",
    subcategory: "",
    product_name: "",
    offer: 0,
    price: 0,
    quantity: 0,
    availability: false,
    unit: "",
    image: "/fruit.jpg",
    expiry: 0,
    description: "",
    subdescription: [""]
  }
  var initial_user = {
    first_name: "",
    email: "",
}
  const route = useRouter();
  const [userdata, setuserdata] = useState(initial_user);
  const [state, setstate] = useState(1);
  const [pro, setpro] = useState({ id: 43,
    category: "fruit",
    subcategory: "Basic",
    product_name: "Papaya",
    offer: 9,
    price: 75.00,
    quantity: 100,
    availability: true,
    unit: "kg",
    image: "",
    expiry: 5,
    description: "Papayas contain high levels of antioxidants vitamin A, vitamin C, and vitamin E. Diets high in antioxidants may reduce the risk of heart disease. The antioxidants prevent the oxidation of cholesterol. When cholesterol oxidizes, it's more likely to create blockages that lead to heart disease.",
    subdescription: ["has vitamin A", " vitamin C"]});
  const now = 80;

  const plus = () => {
    if (state < 5)
      return setstate(state + 1)
    else
      return state
  }
  const minus = () => {
    if (state > 0)
      return setstate(state - 1)
    else
      return state
  }
  function setdata(x) {
    setpro(x);
  }
  function addCart() {
    addToCart(pro, state);
  }

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
      setdata(product[route.query.productview])
      console.log(product[route.query.productview])
      getmydata()
    }
  }, [])
  return (
    <>
      <div className={`${style.wi10}`}>
        <div className={`${style.wi10} ${style.df}`}>
          <div className={`${style.wi10} ${style.df} ${style.navbar}`}>
            <div className={`${style.wi2}`}>
              <h3 className={style.logo}>VEGEFRUIT</h3>
            </div>
            <div className={`${style.wi8} ${style.linkdiv}`}>
              <div className={`${style.wi10} ${style.navlink3}`}>
                <Link href="/" className={style.navlink}>Home</Link>
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
                <Link href="/addtocart" className={style.navli}><Cart /></Link>
              </div>
            </div>
          </div>
          
              <div className={`${style.wi5} ${style.df} ${style.jcc} p-4`}>
                <Image src={pro.image}  width={500} height={461} alt="/dummy.png"/>
              </div>
              <div className={`${style.wi5} p-3 pt-5`}>
                <h5 className={`${style.heading}`}>{pro.product_name}</h5>
                <p className={`${style.review}`}><AiOutlineStar className={style.star} />
                  <AiOutlineStar className={style.star} /><AiOutlineStar className={style.star} />
                  <AiOutlineStar className={style.star} /><AiOutlineStar className={style.star} />0 review</p>
                  {pro.offer == 0 ? <h5 className={style.price}>{`₹ $(pro.price)</h5>
                  :
                    <h5 className={style.price}>{`₹ ${(pro.price)-(((pro.offer)*pro.price)*0.01)} / ${pro.unit}`}<p className={style.offer1}>{`${pro.price} / ${pro.unit}`}</p></h5>
                  }
                
                {pro.offer == 0?<></>:<p style={{color:"red"}}> offer: {pro.offer}%OFF</p>}
                <p className={`${style.product}`}>Product: {pro.product_name}</p>
                <p className={`${style.description}`}>{pro.description}</p>
                {pro.availability == true ?
                  <>
                    <p className={`${style.avail}`}>Availability :</p>
                    <p className={`${style.stock}`}> In Stock</p>
                  </>
                  :
                  <>
                    <p className={`${style.avail}`}>Availability :</p>
                    <p className={`${style.stock}`}>Out of Stock</p>
                  </>
                }
                <ProgressBar striped variant="success" now={now} label={`${now}%`} className={`${style.progress}`} />
                <p className={`${style.expiry}`}>Expiry In: {pro.expiry} Days</p>
                <div className={style.incdec}>
                  <button className={style.incdecbtn} onClick={minus}>-</button>
                  <p className={style.incdec1}>{state}</p>
                  <button className={style.incdecbtn} onClick={plus}>+</button>
                </div>
                <button className={style.addtocart} onClick={addCart}>Add To Cart</button>
              </div>    
          
        </div>
      </div>
    </>
  )
}

