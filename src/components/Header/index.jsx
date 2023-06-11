import logo from "../../assets/logo.svg"
import cart from "../../assets/cart.svg"
import { DivHeaderStyle, HeaderStyle, InputHeaderStyle, LogoStyle, PHeaderStyle, SpanHeaderStyle } from "./style"

export function Header(){
    return(
        <HeaderStyle>
            <LogoStyle>
              <img src={logo} alt="Imagem da logo"/>
            </LogoStyle>
            <DivHeaderStyle>
                <SpanHeaderStyle>
                    <PHeaderStyle>0</PHeaderStyle>
                    <img src={cart} alt="" />
                </SpanHeaderStyle>
                <InputHeaderStyle type="text" placeholder="Digitar Pesquisa" />
            </DivHeaderStyle>
        </HeaderStyle>
    )
}