import styled from "styled-components";

export const ModalMainView = styled.span`
    margin-top: 0px;
    position: absolute;
    background-color: #000;
    left: 0px;
    top: 0px;
    width: 100%;
`;

export const ModalVideoContent = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    
    iframe {
        width: 1000px;
        height: 600px;
    }
    
    img{
        width: 100%;
        height: 100%;
    }
`;

export const ModalFillContainer = styled.div`
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    position:absolute;
`;

export const ModalInfoLayer = styled.div`
    bottom: 30%;
    left: 60px;
    position: absolute;
    top: 30%;
    z-index: 10;
`;

export const ModalMuteButton = styled.div`
    bottom: 30%;
`;