import styled from 'styled-components'
import { isPlayBtnProps } from '../../types';

export const Container = styled.div`  
    height: 90vh;
    position: relative;
`;

export const CategoryWrapper = styled.div`
    position: absolute;
    top: 80px;
    left: 50px;
    font-size: 30px;
    font-weight: 500;
    color: white;
    display: flex;
    align-items: center;

    select {
        cursor: pointer;
        background-color: #0b0b0b;
        border: 1px solid white;
        color: white;
        margin-left: 20px;
        padding: 5px;
    }

`
export const FeaturedImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const InfoWrapper = styled.div`
    width: 35%;
    position: absolute;
    left: 50px;
    bottom: 100px;
    color: white;
    display: flex;
    flex-direction: column;
`

export const MovieTitle = styled.img`
    width: 400px;

`

export const MovieDescription = styled.span`
    margin: 20px 0;
`

export const BtnGroups = styled.span`
    display: flex;
`
export const Btn = styled.button<isPlayBtnProps>`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;
    background-color: ${(props) => props.isPlayBtn ? 'white': 'gray'};
    color: ${(props) => props.isPlayBtn ? '#0b0b0b': 'white'};
    span {
        margin-left: 5px;
    }

    
`
