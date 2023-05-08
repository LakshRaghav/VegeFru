import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Header from "../layouts/header";
import Leftside from "../layouts/leftside";
import Rightside from "../layouts/rightside";
import style from "../../components/admins/admin.module.css";
import { IoHome } from "react-icons/io5";
import { FaUser, FaUserTie } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Link from "next/link";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Text, Tooltip, XAxis, YAxis } from "recharts";
import { useState } from "react";

export default function Admin(props) {
    const [state,setstate] = useState([
        {color:"#FEC200"},
        {color:"#23C7F9"}
    ]);
    const data = [
        {
            "name": "Page A",
            "uv": 400,
            "pv": 240,
            "amt": 240
        },
        {
            "name": "Page B",
            "uv": 300,
            "pv": 139,
            "amt": 221
        },
        {
            "name": "Page C",
            "uv": 200,
            "pv": 980,
            "amt": 229
        },
        {
            "name": "Page D",
            "uv": 278,
            "pv": 390,
            "amt": 200
        },
        {
            "name": "Page E",
            "uv": 189,
            "pv": 480,
            "amt": 218
        },
        {
            "name": "Page F",
            "uv": 239,
            "pv": 380,
            "amt": 250
        },
        {
            "name": "Page G",
            "uv": 349,
            "pv": 430,
            "amt": 210
        }
    ]
    const data01 = [
        {
          "name":"mon",
          "days":2000,
        },
        {  
          "name":"tue",
          "days":1234
        },
        { 
          "name":"wed",  
          "days":2154
        },
        {
          "name":"thu",  
          "days":1001
        },
        { 
          "name":"fri",  
          "days":3000
        },
        { 
          "name":"sat",  
          "days":467
        },
        { 
          "name":"sun",  
          "days":987
        }];
     
    return (
        <>
            <div className={`${style.df} ${style.wi10}`}>
                <div className={`${style.wi_5} ${style.leftlay}`}>
                    <h3>E</h3><br />
                    <button className={style.leftlay_text}><IoHome className={style.leftlay_icon} /></button>
                    <button className={style.leftlay_text}><HiOutlineSquares2X2 className={style.leftlay_icon} /></button>
                    <button className={style.leftlay_text}><FaUser className={style.leftlay_icon} /></button>
                    <button className={style.leftlay_text}><FaUserTie className={style.leftlay_icon} /></button>
                    <button className={style.leftlay_text}><ImStatsDots className={style.leftlay_icon} /></button>
                    <button className={style.leftlay_text}><RiCustomerService2Line className={style.leftlay_icon} /></button>
                </div>
                <div className={`${style.wi95} ${style.rightlay}`}>
                    <div className={`${style.rightnav} ${style.df}`}>
                        <div className={`${style.wi5} ${style.dashhead}`}>
                            <p className={style.rightlay_head}>Dashboard</p>
                        </div>
                        <div className={`${style.wi5} ${style.admin_sign} pe-2`}>
                            <Dropdown> 
                                <Dropdown.Toggle className={`${style.drpdown} ${style.wi4}`}>
                                    <div className={`${style.wi10} ${style.df}`}>
                                        <div className={`${style.wi8}`}>
                                            <p className={`${style.name}`}>lakshay raghav</p>
                                            <p className={`${style.email}`}>raghavlakshay15@gmail.com</p>
                                        </div>
                                        <div className={`${style.wi1}`}>
                                            <div className={style.picture}></div>
                                        </div>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className={`${style.wi10} ${style.df}`}>
                        <div className={`${style.stat_div} ${style.df}`}>
                            <div className={`${style.stat1}`}>
                                <p className={style.stat_para}>Profit</p>
                                <p className={style.stat_para2}>101010</p>
                                <Link href=""><p className={style.stat_link}>Visit entire list</p></Link>
                            </div>
                            <div className={`${style.stat2}`}>
                                <p className={style.stat_para}>Sales</p>
                                <p className={style.stat_para2}>20202</p>
                                <Link href=""><p className={style.stat_link}>Visit entire list</p></Link>
                            </div>
                            <div className={`${style.stat3}`}>
                                <p className={style.stat_para}>Weekly Customers</p>
                                <p className={style.stat_para2}>2020</p>
                                <Link href=""><p className={style.stat_link}>Visit entire list</p></Link>
                            </div>
                            <div className={`${style.stat4}`}>
                                <p className={style.stat_para}>Our Clients</p>
                                <p className={style.stat_para2}>2102</p>
                                <Link href=""><p className={style.stat_link}>Visit entire list</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.wi10} ${style.df}`}>
                        <div className={`${style.graph}`}>
                            <p className={style.graph_sales}>Sales</p>
                            <AreaChart width={800} height={230} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#F71D75" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#F71D75" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0A0082" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#0A0082" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#F71D75" fillOpacity={2} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pv" stroke="#0A0082" fillOpacity={2} fill="url(#colorPv)" />
                            </AreaChart>
                        </div>
                        <div className={`${style.wi3}`}>
                            {/* <div className={style.}>

                            </div> */}
                        </div>
                    </div>
                    <div className={`${style.wi10} ${style.df}`}>
                        <div className={`${style.barchart}`}>
                            <ResponsiveContainer>
                                <BarChart width={250} height={280} data={data01} className={style.bar}>
                                    <XAxis dataKey="name" />
                                    <YAxis className={style.yaxis}/>
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="days" fill="#79ECF7"/>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className={`${style.orders} p-4`}>
                            <p className={style.customer}>Customer Details</p>
                            <div className={style.outerdv}>
                                <div className={style.innerdv}>
                                    <table>
                                    <tr className={style.customer_box}>
                                        <th className={style.cust_head} width={70}>Id</th>
                                        <th className={style.cust_head} width={200}>Name</th>
                                        <th className={style.cust_head} width={100}>Date</th>
                                        <th className={style.cust_head} width={140}>Amount</th>
                                        <th className={style.cust_head} width={140}>Transaction Id</th>
                                        <th className={style.cust_head} width={100}>Status</th>
                                    </tr>
                                    <tr className={style.customer_box2}>
                                        <td className={style.cust_field} width={70}>152451</td>
                                        <td className={style.cust_field} width={200}>Lakshay</td>
                                        <td className={style.cust_field} width={100}>25/04/2023</td>
                                        <td className={style.cust_field} width={140}>2000</td>
                                        <td className={style.cust_field} width={140}>f523s452d</td>
                                        <td className={style.cust_field} width={100}>success</td>
                                    </tr>
                                    <tr className={style.customer_box2}>
                                        <td className={style.cust_field} width={70}>152451</td>
                                        <td className={style.cust_field} width={200}>Lakshay</td>
                                        <td className={style.cust_field} width={100}>25/04/2023</td>
                                        <td className={style.cust_field} width={140}>2000</td>
                                        <td className={style.cust_field} width={140}>f523s452d</td>
                                        <td className={style.cust_field} width={100}>success</td>
                                    </tr>
                                    <tr className={style.customer_box2}>
                                        <td className={style.cust_field} width={70}>152451</td>
                                        <td className={style.cust_field} width={200}>Lakshay</td>
                                        <td className={style.cust_field} width={100}>25/04/2023</td>
                                        <td className={style.cust_field} width={140}>2000</td>
                                        <td className={style.cust_field} width={140}>f523s452d</td>
                                        <td className={style.cust_field} width={100}>success</td>
                                    </tr>
                                    <tr className={style.customer_box2}>
                                        <td className={style.cust_field} width={70}>152451</td>
                                        <td className={style.cust_field} width={200}>Lakshay</td>
                                        <td className={style.cust_field} width={100}>25/04/2023</td>
                                        <td className={style.cust_field} width={140}>2000</td>
                                        <td className={style.cust_field} width={140}>f523s452d</td>
                                        <td className={style.cust_field} width={100}>success</td>
                                    </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}