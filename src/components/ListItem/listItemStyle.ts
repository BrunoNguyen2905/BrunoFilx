import styled from 'styled-components'
import { ListItemProps } from "../../types";

export const ListItemContainer = styled.div<ListItemProps>`  
    width: 225px;
    height: 120px;
    background-color: #0b0b0b;
    margin-right: 5px;
    overflow: hidden;
    color: white;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    &:hover {
        width: 325px;
        height: 300px;
        -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
        box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
        position: absolute;
        top: -150px;
        border-radius: 5px;
        left:  ${props => props.indexValue}px;

        img {
            height: 140px;
        }
    }
    
`;

export const ItemInfo = styled.div`//#endregion
    display: flex;
    flex-direction: column;
    padding: 5px;
`

export const IconsGroup = styled.div`
    display: flex;
    margin-bottom: 10px;

    .icon {
        border: 2px solid white;
        padding: 5px;
        border-radius: 50%;
        margin-right: 10px;
        font-size: 16px;
        cursor: pointer;
    }
`
export const ItemInfoTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: gray;
`

export const AgeLimitField = styled.span`
    border: 1px solid gray;
    padding: 1px 3px;
    margin: 0 10px; 
`;

export const DescriptionField = styled.div`
    font-size: 13px;
    margin-bottom: 10px;
`

export const GenreField = styled.div`
    font-size: 14px;
    color: lightgray;
`