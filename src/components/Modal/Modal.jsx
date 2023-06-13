import { BackgroundModalStyle, SectionModalStyle } from "./style";


export function Modal(){
    return(
        <BackgroundModalStyle>
         <SectionModalStyle>
            <header>
                <h2>Carrinho de compras</h2>
            </header>
            <div>
                <ul>
                    <img src="" alt="" />
                    <h2></h2>
                    <button></button>

                </ul>
                <div>
                    <span>
                        <h3>Total</h3>
                        <p>R$</p>
                    </span>
                    <button>Remover todos</button>
                </div>
            </div>

         </SectionModalStyle>
        </BackgroundModalStyle>
    )
}