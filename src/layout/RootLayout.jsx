import { NavLink, Outlet } from "react-router-dom"
import Basket from "../component/Basket"
import BreadCrumbs from "../component/BreadCrumbs"
import "./css/root.css"

function RootLayout() {
  return (
    <>
        <nav>
            <NavLink  className="navLink" to="/">Home</NavLink>
            <NavLink  className="navLink" to="/about">About</NavLink>
            <NavLink className="navLink"  to="/contact">Contact</NavLink>
            <NavLink className="navLink"  to="/product">Product</NavLink>
        </nav>
        <BreadCrumbs></BreadCrumbs>  

        <Basket></Basket>     

        <Outlet></Outlet>

    </>
  )
}

export default RootLayout