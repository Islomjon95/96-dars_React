import { useLocation , NavLink } from "react-router-dom"
import "./css/breadCrumbs.css"

function BreadCrumbs() {
    const location = useLocation()
    const CrumbLink = [];
    const crumbs = location.pathname.split("/")
        .filter(crumb=>crumb!="")
        .map(crumb=>{
            CrumbLink.push(crumb)
            

            return(
                <div className="breadCrumb" key={crumb}>
                    <NavLink className="breadCrumb__link" to={CrumbLink.join("/")}>{crumb}</NavLink>
                </div>
            )
        })
    
  return (
    <div>
        {crumbs}
    </div>
  )
}

export default BreadCrumbs