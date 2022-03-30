import styled from "styled-components";

export const RowContainer = styled.div`
    width: 97.5vw;
`;

export const MovieTitle = styled.div`
    margin-left: 60px;
`;

export const Item = styled.div`
    position: relative;
    flex-direction: column;
    cursor: pointer;
    transition: all 450ms !important;
    transform: scale(0.9);
    
    &:hover{
        transition-delay: 450ms !important;
        transform: scale(1.0);
        z-index:20;
    }
`;

export const Slider = styled.div`
    margin-left: 60px;
    .swiper-pagination {
        top: 0 !important;
        height: 1rem !important;
        text-align: right !important;
    }
    .swiper-pagination-bullet {
        background-color: rgb(255, 255, 255) !important;
    }
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
        width: 97.5vw !important;
        height: 1px !important;
    }
    .swiper-button-prev, .swiper-button-next {
        transition: all 450ms !important;
        color: rgb(255, 255, 255);

        &:hover {
            transform: scale(1.2) !important;
            transition: all 450ms !important;
        }
    }
`;