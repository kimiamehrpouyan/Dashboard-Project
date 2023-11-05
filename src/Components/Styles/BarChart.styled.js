import { styled } from "styled-components";

export const BarCharts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 15px;

    span{
        font-size: 18px;
        font-weight: 700;
        color: #000;
    }
`

export const Bars = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
`

export const Line = styled.div`
    display: flex;
    gap: 10px;

    &>:nth-child(1){
        font-size: 12px;
        font-weight: 400;
        color: #030229;
    }

    /* &>:nth-child(2){
        width: 167px;
        height: 12px;
    } */

    &>:nth-child(3){
        font-size: 12px;
        font-weight: 400;
        color: #030229;
    }
`