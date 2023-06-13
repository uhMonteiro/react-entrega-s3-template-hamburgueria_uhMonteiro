import styled from "styled-components";

export const BackgroundModalStyle= styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0,0,0,0.7);
`


export const SectionModalStyle = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 500px;
    height: 371px;
    border-radius: 5px 5px 0px 0px;
`

export const HeaderModalStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-color-primary);
    border-radius: 5px 5px 0px 0px;
    padding: 13px 22px;
`

export const H2HeaderStyle = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    
    color: white;
`

export const ButtonHeaderStyle = styled.button`
    width: 10.87px;
    height: 12.87px;
    color: rgba(255, 255, 255, 0.5);
    background: none;
    border: none;
    display: flex;
    justify-content: center;
`

export const UlModalStyle = styled.ul`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
`

export const SpanUlStyle = styled.span`
    display: flex;
`

export const H2ModalStyle = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 0px;
color: var(--color-grey-600);
align-self: center;
margin-left: 15px;
`

export const TrashButtonModal = styled.button`
    background: none;
    border: none;
    height: 20px;
    margin-top: 20px;
`