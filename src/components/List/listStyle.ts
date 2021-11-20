import styled from 'styled-components'
import { ArrowProps } from '../../types';
export const ListContainer = styled.div`  
    width: 100%;
    margin-top: 10px;
`;

export const ListTitle = styled.span`  
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-left: 50px;
`;

export const ListItemContainer = styled.div`
    margin-left: 50px;
    display: flex;
    width: max-content;
    margin-top: 10px;
    transform: translateX(0px);
    transition: all 1s ease; //animation
`

export const ListWrapper = styled.div<ArrowProps>`
    position: relative;

    .sliderArrow {
        height: 100% !important;
        background-color: rgb(22, 22, 22, 0.5);
        width: 50px !important;
        color: white;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 99;
        cursor: pointer;
    }
    .right {
        right: 0;
    }
    .left {
        display: ${(props) => !props.isMoved ? 'none': 'inline-block'} !important;
        left: 0;
    }
`
