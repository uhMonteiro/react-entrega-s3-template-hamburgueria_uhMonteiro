import { ButtonStyle, DivStyle, FigureStyle, H2Style, LiStyle, PCategoryStyle, PPriceStyle } from "./style"


export function SnacksCards({ product , setCartProduct }){
    
    return(
        <LiStyle>
            <FigureStyle>
                <img src={product.img} alt={product.name} />
            </FigureStyle>
            <DivStyle>
                <H2Style>{product.name}</H2Style>
                <PCategoryStyle>{product.category}</PCategoryStyle>
                <PPriceStyle>R$ {product.price}</PPriceStyle>
                <ButtonStyle onClick={() => setCartProduct(product)}>Adicionar</ButtonStyle>
            </DivStyle>
        </LiStyle>
    )
}