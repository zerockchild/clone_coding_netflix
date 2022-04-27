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

    div{
    width: 100%;
    height: 100%;
    }
    
    iframe {
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
    
    img{
        width: 100%;
        height: 100%;
    }
`;

export const FillContainer = styled.div`
    top:0px;
    left:0px;
    position:absolute;
`;

export const InfoLayer = styled.div`
    top: 0;
    left: 0;
    position:absolute;
    z-index: 10;
`;

export const TitleInfo = styled.span`
    font-size:1em;
    top : 20%;
    left : 5%;
    position:absolute;
`;

export const MuteButton = styled.span`
    width: 20px;
    height: 20px;
    top : 70%;
    left : 90%;
    position:absolute;
`;

export const PlayButton = styled.span`
    width: 20px;
    height: 20px;
    top : 70%;
    left : 90%;
    position:absolute;
`;