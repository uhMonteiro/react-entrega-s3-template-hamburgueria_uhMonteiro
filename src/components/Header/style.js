import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: #F5F5F5;
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const LogoStyle = styled.figure`
    margin-left: 10%;
`

export const DivHeaderStyle = styled.div`
    margin-right: 10%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const SpanHeaderStyle = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 35px;
    margin-right: 15px;
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
    border-width: 2px 0px 2px 2px;
    border-style: solid;
    border-color: var(--color-grey-100);
    border-radius: 8px 0px 0px 8px;

    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 19px;

    ::placeholder{
        color: var(--color-grey-100);
    }

    :focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export const ButtonHeaderStyle = styled.button`
    height: 64px;
    border-width: 2px 2px 2px 0px;
    border-style: solid;
    border-color: var(--color-grey-100);
    border-radius: 0px 8px 8px 0px;
    background-color: white;
    margin-left: -4px;
`