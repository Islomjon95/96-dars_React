import React from 'react'
import "./css/card.css"

function Card({product}) {
  return (
        <>
            <div onClick={()=>{location.href=`/product/${product.id}`}} className="card" key={product.id}>
                <img src={product.image} alt={product.title} width="300" />  
                <p>Product name: <i>{product.title}</i></p>
                <p>Product price <i>{product.price}</i></p>
                <p>Rate: <i>{product.rating.rate}</i> &nbsp; &nbsp; Sales: <i>{product.rating.count}</i></p>
            </div>
        </>
  )
}

export default Card