import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

function ProductDetail() {
    const {id }= useParams()
    const url = "https://fakestoreapi.com/products/" + id
    const {data:product, isPending, error} = useFetch(url)
    
    
  return (
        <>
            {
                product&&<div className="product_card">
                <img src={product.image} alt={product.title}  />
                <h3>Product Name: {product.title}</h3>
                <p>Description: {product.description}</p>
                <p>Category : {product.category}</p>
                <p>Rate: <i>{product.rating.rate}</i> &nbsp; &nbsp; Sales: <i>{product.rating.count}</i></p>
                
            </div>
            }
        </>
  )
}

export default ProductDetail