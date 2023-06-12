import logo from "../../assets/logo.svg"
import cart from "../../assets/cart.svg"
import search from "../../assets/search.svg"
import { ButtonHeaderStyle, DivHeaderStyle, HeaderStyle, InputHeaderStyle, LogoStyle, PHeaderStyle, SpanHeaderStyle } from "./style"

export function Header({inputSearch , setInputSerach , callback}){
    

    const handleSubmit = (event) => {
        event.preventDefault()
        callback(inputSearch)

    }
    
    return(
        <HeaderStyle>
            <LogoStyle>
              <img src={logo} alt="Imagem da logo"/>
            </LogoStyle>
            <DivHeaderStyle onSubmit={handleSubmit}>
                <SpanHeaderStyle>
                    <PHeaderStyle>0</PHeaderStyle>
                    <img src={cart} alt="" />
                </SpanHeaderStyle>
                <InputHeaderStyle 
                  type="text" 
                  placeholder="Digitar Pesquisa" 
                  onChange={(event) => setInputSerach(event.target.value)} />
                <ButtonHeaderStyle type="submit"><img src={search} alt="" /></ButtonHeaderStyle>
            </DivHeaderStyle>
        </HeaderStyle>
    )
}