import styled from "styled-components";

export const RowContainer = styled.div`
    width: 97.5vw;
`;

export const Row = styled.div`
    z-index: 100;
    display: flex;
    flex-direction: row;
    `;

export const Item = styled.div`
    position: relative;
    flex-direction: column;
    cursor: pointer;
    transition: transform: 0.5s;
    transform: scale(0.9);
    
    &:hover{
        transform: scale(1.0);
        z-index:101;
    }
`;

export const Slider = styled.div`
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
        width: 97.5vw !important;
        height: 1px !important;
}
    .swiper-button-prev, .swiper-button-next {
        
    }
`;