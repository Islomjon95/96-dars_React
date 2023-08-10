import { Outlet } from "react-router-dom"
import "./css/product.css"

function ProductLayout() {
  return (
    <>
        <div className="box">
        <Outlet></Outlet>
        </div>
       
    </>
  )
}

export default ProductLayout