import styled from "styled-components";

export const MainView = styled.span`
    z-index: -999;
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
`;