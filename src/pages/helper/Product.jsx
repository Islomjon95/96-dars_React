import {useFetch} from "../../hooks/useFetch"
import Card from "../../component/Card"

function Product() {
    const url = "https://fakestoreapi.com/products"
    const {data:products, isPending, error} = useFetch(url)
    console.log(products)
  return (
    <>
        {isPending&& <h1>Loading...</h1>} 
        {error&& <h1>{error}</h1>}

        {products&&products.map((product)=>{
            return(
                <Card product={product} key={product.id}></Card>
            )
        })}
       
    </>
    

  )
}

export default Product