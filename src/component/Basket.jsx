import "./css/basket.css"

function Basket() {
    return (
        <>
            <div onClick={()=>{alert("salom")}} className="basket">
                <i className="fa-solid fa-cart-shopping fa-2xl"></i>
            </div>
        </>
    )
}

export default Basket