import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: #F5F5F5;
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoStyle = styled.figure`
    margin-left: 10%;
`

export const DivHeaderStyle = styled.div`
    margin-right: 10%;
    display: flex;
    align-items: center;
    gap: 15px;
`

export const SpanHeaderStyle = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 35px;
`

export const PHeaderStyle = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 24px;
    background-color: var(--color-color-primary);
    color: white;
    border-radius: 7px;
    align-self: flex-end;
    margin-bottom: -5px;
    font-style: normal;
    font-weight: 900;
    font-size: 1.4rem;
    line-height: 0px;
`

export const InputHeaderStyle = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 15px;
    gap: 115px;
    
    width: 365px;
    height: 60px;
    background-color: white;
    border: 2px solid var(--color-grey-100);
    border-radius: 8px;

    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 19px;

    ::placeholder{
        color: var(--color-grey-100);
    }
`