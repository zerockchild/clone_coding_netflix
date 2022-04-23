import styled from "styled-components";

export const MainView = styled.span`
    overflow: hidden;
    margin-top: 0px;
    position: relative;
    background-color: #000;
    left: 0px;
    top: 0px;
    width: 100%;
    height:100%;
`;

export const VideoContent = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;

    div{
    width: 100%;
    height: 100%;
    }
    
    iframe {
        width: 100%;
        height: 100%;
    }
    
    img{
        width: 100%;
        height: 100%;
    }
`;

export const FillContainer = styled.div`
    top:0%;
    left:0%;
    width: inherit;
    height: inherit;
    position:relative;
`;

export const InfoLayer = styled.div`
    top: 30%;
    left: 10%;
    position:absolute;
    z-index: 10;
`;

export const MuteButton = styled.div`
    top : 30%;
    bottom: 30%;
`;