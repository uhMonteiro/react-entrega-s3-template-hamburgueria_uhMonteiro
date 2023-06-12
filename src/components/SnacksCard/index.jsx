import axios from "axios"
import { useEffect } from "react"
import { api } from "../../services/api"
import { useState } from "react"


export function SnacksCards(){
    const [products , setProducts] = useState([])
    
    useEffect(() => {
        async function getProducts(){
            const response = await api.get('/products')
            console.log(response)
        }
        getProducts()
        
    } , [])

    return(
        <li>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h2></h2>
                <p></p>
                <p></p>
                <button>Adicionar</button>
            </div>
        </li>
    )
}