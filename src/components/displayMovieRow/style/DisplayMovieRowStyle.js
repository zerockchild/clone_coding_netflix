import styled from "styled-components";

export const RowContainer = styled.div`
    width: 100vw;
`;

export const Row = styled.div`
    z-index: 100;
    display: flex;
    flex-direction: row;
    `;

export const Item = styled.div`
    position: relative;
    margin-left: 5px;
    flex-direction: column;
    cursor: pointer;
    transition: transform: 0.5s;
    transform: scale(0.9);
    
    &:hover{
        transform: scale(1.0);
        z-index:101;
    }
    `;