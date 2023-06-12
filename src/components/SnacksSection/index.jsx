import { SnacksCards } from "../SnacksCard";
import { useEffect } from "react"
import { api } from "../../services/api"
import { useState } from "react"



export function SnacksSection(){
    const [products , setProducts] = useState([])
    
    useEffect(() => {
        async function getProducts(){
            const response = await api.get('/products')

            setProducts(response.data)
            console.log(response)
        }
        getProducts()
        
    } , [])

    return(
        <section>
            <ul>
                {products.map((product) => <SnacksCards key={product.id} product={product}/>)}
            </ul>
        </section>
    )
}