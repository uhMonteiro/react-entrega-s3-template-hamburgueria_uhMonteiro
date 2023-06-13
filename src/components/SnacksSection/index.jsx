import { SnacksCards } from "../SnacksCard"
import { useEffect } from "react"
import { api } from "../../services/api"
import { useState } from "react"
import { UlStyle } from "./style"



export function SnacksSection({search , setCartProduct}){
    const [products , setProducts] = useState([])
    
    useEffect(() => {
        async function getProducts(){
            const response = await api.get("/products", {
                params: {
                    name_like: search
                }
            })

            setProducts(response.data)
        }
        getProducts()
        
    } , [search])

    return(
        <section>
            <UlStyle>
                {products.map((product) => 
                <SnacksCards 
                key={product.id} 
                product={product}
                setCartProduct={setCartProduct}/>)}
            </UlStyle>
        </section>
    )
}