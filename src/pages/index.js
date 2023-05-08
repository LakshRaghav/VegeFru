import Admin from "@/components/admins/admin"
import Cart from "@/components/cart/cart";
import Dashboard from "@/components/dashboard/dashboard";
import View from "@/pages/[productview]";
import { APP_CLIENT_INTERNALS } from "next/dist/shared/lib/constants";
import { FaWeight } from "react-icons/fa";
import ShopProducts from "./addtocart";



export default function Main(){


    return(
        <>
        {/* <Admin /> */}
        <Dashboard />
        {/* <ShopProducts /> */}
        </>
    )
}







