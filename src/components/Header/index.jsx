import logo from "../../assets/logo.svg"
import cart from "../../assets/cart.svg"

export function Header(){
    return(
        <header>
            <img src={logo} alt="Imagem da logo"/>
            <div>
                <span>
                    <p>0</p>
                    <img src={cart} alt="" />
                </span>
                <input type="text" placeholder="Digitar Pesquisa" />
            </div>
        </header>
    )
}