import styled from "styled-components";

export const MainView = styled.span`
    margin-top: 0px;
    position: absolute;
    background-color: #000;
    left: 0px;
    top: 0px;
    width: 99vw;
    heigth: 56.25vh;
`;

export const VideoContent = styled.div`
    position: relative;
    overflow: hidden;
    width: 99vw;
    height: 100vh;
    top: -100px;
    
    iframe {
        width: 99vw;
        height: 100vh;
    }
    
    img{
        width: 99vw;
        height: 100vh;
    }
`;

export const FillContainer = styled.div`
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    position:absolute;
`;

export const InfoLayer = styled.div`
    bottom: 30%;
    left: 60px;
    position: absolute;
    top: 30%;
    z-index: 10;
`;

export const MuteButton = styled.div`
    bottom: 30%;
`;