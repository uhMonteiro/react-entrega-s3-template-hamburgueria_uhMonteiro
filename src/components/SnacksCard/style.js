import styled from "styled-components";


export const LiStyle = styled.li`
    width: 300px;
    height: 346px;
    border: 2px solid var(--color-grey-100);
    border-radius: 5px;
    background-color: white;

    :hover{
        border: 2px solid var(--color-color-primary);
    }
`

export const FigureStyle = styled.figure`
    display: flex;
    justify-content: center;
    height: 150px;
    width: 100%;
    background-color: #F5F5F5;
`

export const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 10px;
    width: 300px;
    height: 196px;
`

export const H2Style = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 24px;
    color: var(--color-grey-600);
`

export const PCategoryStyle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 16px;
    color: var(--color-grey-300);
`

export const PPriceStyle = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-color-primary);
`

export const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    gap: 10px;
    width: 106px;
    height: 40px;
    background-color: var(--color-grey-4);
    border: 2px solid  var(--color-grey-4);
    border-radius: 8px;
    
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 17px;
    color: white;

    :hover{
        background-color: var(--color-color-primary);
        border: 2px solid  var(--color-color-primary);
    }
`