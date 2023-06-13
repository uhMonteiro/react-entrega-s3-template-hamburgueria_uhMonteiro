import { useRef } from "react";
import { BackgroundModalStyle, ButtonHeaderStyle, H2HeaderStyle, H2ModalStyle, HeaderModalStyle, SectionModalStyle, SpanUlStyle, TrashButtonModal, UlModalStyle } from "./style";
import { BsTrashFill } from "react-icons/bs"
import { useEffect } from "react";
import { SpanHeaderStyle } from "../Header/style";


export function Modal({ cartProduct , setModal }){
    const modalRef = useRef(null)

    useEffect(() =>{
        const handleOutClick = (e) => {
            if(!modalRef.current?.contains(e.target)){
                setModal(false)
            }
        }

        window.addEventListener("mousedown" , handleOutClick)

        return() => {
            window.removeEventListener("mousedown" , handleOutClick)
        }
    })

    useEffect(() => {
        const handleKeyDown = (e) =>{
            if(e.key === "Escape"){
                setModal(false)
            }
        }

        window.addEventListener("keydown" , handleKeyDown)

        return () => {
            window.removeEventListener("keydown" , handleKeyDown)
        }
    })

    return(
        <BackgroundModalStyle>
         <SectionModalStyle ref={modalRef}>
            <HeaderModalStyle>
                <H2HeaderStyle>Carrinho de compras</H2HeaderStyle>
                <ButtonHeaderStyle onClick={() => setModal(false)}>X</ButtonHeaderStyle>
            </HeaderModalStyle>
            <div>
                <UlModalStyle>
                    <SpanUlStyle>
                      <img src={cartProduct.img} alt="" />
                      <H2ModalStyle>{cartProduct.name}</H2ModalStyle>
                    </SpanUlStyle>
                    <TrashButtonModal>
                        <BsTrashFill/>
                    </TrashButtonModal>
                </UlModalStyle>
            </div>

         </SectionModalStyle>
        </BackgroundModalStyle>
    )
}