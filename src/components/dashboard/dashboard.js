import Image from "next/image";
import style from "./dashboard.module.css";
import { Button, Card, Dropdown, Nav } from "react-bootstrap";
import Link from "next/link";
import Cart from "../cart/cart";
import { getStorage } from "../api/constant";
import { user_data } from "../api/api"
import { useContext, useEffect } from "react";
import { Globalcontext } from "../context/globalContext";
import { useState } from "react";


export default function Dashboard(props) {
    const {product, data, context } = useContext(Globalcontext);
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
            {
                        <div className={`${style.wi10}`}>
                <div className={`${style.logo}`}></div>
                <p className={style.logoname}>VEGEFRUIT</p>
                <div className={`${style.banner} ${style.df} ${style.wi10}`}>
                    <div className={`${style.wi10} ${style.image2}`}>
                        <Image src={"/dashboard1.jpg"} alt="" width={1350} height={590} />
                    </div>
                </div>
                <div className={`${style.wi10}`}>
                    <div className={`${style.navbar} ${style.df}`}>
                        <div className={`${style.wi10} ${style.df} ${style.jce}`}>
                            <div className={style.nav}>
                                <Link href="/" className={style.navlink}>Home</Link>
                                <Link href="#contact" className={style.navlink}>Contact</Link>
                                <Link href="#about" className={style.navlink}>About</Link>
                                {/* <div className={`${style.dropdown}`}>
                                    <button className={`${style.drop_button}`}>Category</button>
                                    <div className={`${style.drop_box} ${style.df}`}>
                                        <div className={`${style.wi10} ${style.df}`}>
                                            <div className={`${style.wi3} ${style.categ_div}`}>
                                                <Link href="" className={`${style.category}`}>Vegetable</Link>
                                                <Link href="" className={`${style.subcategory}`}>organic</Link>
                                                <Link href="" className={`${style.subcategory}`}>organic</Link>
                                                <Link href="" className={`${style.subcategory}`}>organic</Link>
                                                <Link href="" className={`${style.subcategory}`}>organic</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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
                                <Link href="/addtocart" className={style.navcart}><Cart /></Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.wi10} ${style.df}`}>
                        <div className={`${style.wi5} ${style.rightdiv}`}>
                            <h2 className={`${style.banner_quote}`}>The Most Fresh 'n' Healthy</h2>
                            <h2 className={`${style.banner_quote}`}>Exotic Veggies and Fruits.</h2>
                            <p className={`${style.banner_para} pt-2`}>Have been providing healthy,fresh,exotic fruits vegetables juices with unmatchable </p>
                            <p className={`${style.banner_para}`}>quality at your door step directly from farms.</p>
                            <Link href="/products"><button className={style.shopnow}>Shop Now</button></Link>
                        </div>
                        <div className={`${style.wi5}`}>

                        </div>
                    </div>
                </div>
                <div id="about" className={`${style.wi10} ${style.df} ${style.jcc}`}>
                    <div className={`${style.wi8} ${style.about}`}>
                        <h2 className={style.heading}>About Us</h2>
                        <p className={`${style.about_para} mt-4`}>The best in providing one of the best quality fruits vegetables and various juices.</p>
                        <p className={style.about_para}>Exotic vegetables and fruits from different corners of the world to your door step in minutes.</p>
                        <p className={style.about_para}>The best in providing one of the best quality fruits</p>
                        <div className={`${style.wi10} ${style.df} ${style.jcc} mt-5`}>
                            <Image src={"/about.jpg"} alt="" width={726} height={258} />
                        </div>
                        <div className={`${style.df} ${style.jcc} mt-5`}>
                            <button className={style.about_button}>Know more</button>
                        </div>
                    </div>
                </div>
                <div className={`${style.wi10} ${style.df} ${style.jcc} ${style.our_product}`}>
                    <div className={`${style.wi8}`}>
                        <div className={`${style.wi10}`}>
                            <h2 className={`${style.op_heading}`}>Our Products</h2>
                            <p className={style.op_para}>Our products are of various types, some of those are</p>
                            <p className={style.op_para}>listed below. check out by clicking below.</p>
                            <p className={style.op_para}>clicking below.</p>
                            <div className={`${style.wi10} ${style.df}`}>
                                <div className={`${style.card_div} ${style.df} ${style.jcc}`}>
                                    <Card className={style.card}>
                                        <Card.Img src="/upload/passion.avif" className={style.card_image} />
                                        <Card.Body className={style.card_body}>
                                            <Card.Title className={style.card_title}>Passion Fruit</Card.Title>
                                            <Card.Text className={style.card_price}>
                                                {`₹ 178.00`}
                                            </Card.Text>
                                            <div className={style.card_text}>
                                                <p className="p-0 m-0">-healthy fruit</p>
                                                <p className="p-0 m-0">-Clear Urine flow</p>  
                                            </div>
                                            <Link href={`/0`}><button className={style.card_button}>Shop now</button></Link>                                            
                                        </Card.Body>
                                    </Card>
                                    <Card className={style.card}>
                                        <Card.Img src="/upload/rambutan.avif" className={style.card_image} />
                                        <Card.Body className={style.card_body}>
                                            <Card.Title className={style.card_title}>Rambutan</Card.Title>
                                            <Card.Text className={style.card_price}>
                                                {`₹ 299.00`}
                                            </Card.Text>
                                            <div className={style.card_text}>
                                                <p className="p-0 m-0">-healthy fruit</p>
                                                <p className="p-0 m-0">-Increases insulin content</p>  
                                            </div>
                                            <Link href={`/1`}><button className={style.card_button}>Shop now</button></Link>                                            
                                        </Card.Body>
                                    </Card>
                                    <Card className={style.card}>
                                        <Card.Img src="/upload/longan.jpg" className={style.card_image} />
                                        <Card.Body className={style.card_body}>
                                            <Card.Title className={style.card_title}>Longan</Card.Title>
                                            <Card.Text className={style.card_price}>
                                                {`₹ 86.50`}
                                            </Card.Text>
                                            <div className={style.card_text}>
                                                <p className="p-0 m-0">-rich in vitamin A</p>
                                                <p className="p-0 m-0">-minerals and antioxidants</p>  
                                            </div>
                                            <Link href={`/2`}><button className={style.card_button}>Shop now</button></Link>                                            
                                        </Card.Body>
                                    </Card>
                                    <Card className={style.card}>
                                        <Card.Img src="/upload/dragon.jpg" className={style.card_image} />
                                        <Card.Body className={style.card_body}>
                                            <Card.Title className={style.card_title}>Dragon Fruit</Card.Title>
                                            <Card.Text className={style.card_price}>
                                                {`₹ 200.00`}
                                            </Card.Text>
                                            <div className={style.card_text}>
                                                <p className="p-0 m-0">-healthy fruit</p>
                                                <p className="p-0 m-0">-Boost Immunity</p>  
                                            </div>
                                            <Link href={`/3`}><button className={style.card_button}>Shop now</button></Link>                                            
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.wi10} ${style.df} ${style.jcc} ${style.gallery}`}>
                    <div className={`${style.wi7}`}>
                        <h3 className={style.gallery_heading}>Gallery</h3>
                        <p className={style.gallery_para}>Some of our exotic products as an art gallery.</p>
                        <div className={`${style.gallery_div} ${style.wi10}`}>
                            <div className={`${style.gallery_image}`}>
                                
                            </div>
                            <div className={`${style.gallery_image1}`}>

                            </div>
                            <div className={`${style.gallery_image2}`}>

                            </div>
                            <div className={`${style.gallery_image3}`}>

                            </div>
                            <div className={`${style.gallery_image4}`}>

                            </div>
                            <div className={`${style.gallery_image5}`}>

                            </div>
                            <div className={`${style.gallery_image6}`}>

                            </div>
                            <div className={`${style.gallery_image7}`}>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact" className={`${style.wi10} ${style.contact} ${style.df}`}>
                    <div className={`${style.contact_image} ${style.df} ${style.jcc}`}>
                        <h3 className={style.contact_heading}>Contact us</h3>
                        <div className={`${style.wi8} ${style.contact_info} ${style.df}`}>
                            <div className={style.map}>

                            </div>
                            <div className={style.contact_form}>
                                <form>
                                    <label className={style.label}>First name</label>
                                    <input type={"input"} className={style.input} placeholder="First name" />
                                    <label className={style.label}>Last name</label>
                                    <input type={"input"} className={style.input} placeholder="Last name" />
                                    <label className={style.label}>Username</label>
                                    <input type={"email"} className={style.input} placeholder="@gmail.com" />
                                    <label className={style.label}>Message</label>
                                    <textarea rows="3" cols="20" name="comment" form="usrform" placeholder="Message" className={style.input1} />
                                    <button className={style.input_btn}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}