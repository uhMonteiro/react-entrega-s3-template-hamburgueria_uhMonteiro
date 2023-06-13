import logo from "../../assets/logo.svg"
import cart from "../../assets/cart.svg"
import search from "../../assets/search.svg"
import { ButtonHeaderStyle, DivHeaderStyle, HeaderStyle, InputHeaderStyle, LogoStyle, PHeaderStyle, SpanHeaderStyle } from "./style"
import { useState } from "react"
import { Modal } from "../Modal/Modal"

export function Header({inputSearch , setInputSerach , callback}){
    

    const handleSubmit = (event) => {
        event.preventDefault()
        callback(inputSearch)

    }

    const [modal , setModal] = useState(false)
    
    return(
        <HeaderStyle>
            <LogoStyle>
              <img src={logo} alt="Imagem da logo"/>
            </LogoStyle>
            <DivHeaderStyle onSubmit={handleSubmit}>
                <SpanHeaderStyle onClick={() => setModal(!modal)}>
                    <PHeaderStyle>0</PHeaderStyle>
                    <img src={cart} alt="" />
                </SpanHeaderStyle>
                <InputHeaderStyle 
                  type="text" 
                  placeholder="Digitar Pesquisa" 
                  onChange={(event) => setInputSerach(event.target.value)} />
                <ButtonHeaderStyle type="submit"><img src={search} alt="" /></ButtonHeaderStyle>
            </DivHeaderStyle>
            {modal && <Modal/>}
        </HeaderStyle>
    )
}