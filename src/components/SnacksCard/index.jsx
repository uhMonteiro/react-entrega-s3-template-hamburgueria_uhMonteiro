

export function SnacksCards({ product }){
    
    return(
        <li>
            <div>
                <img src={product.img} alt={product.name} />
            </div>
            <div>
                <h2>{product.name}</h2>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <button>Adicionar</button>
            </div>
        </li>
    )
}