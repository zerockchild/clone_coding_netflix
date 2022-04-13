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
    }
    
    img{
        width: 100%;
        height: 100%;
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
    bottom: 60%;
    left: 60px;
    position: absolute;
    top: 30%;
    z-index: 10;
`;

export const MuteButton = styled.div`
    bottom: 30%;
`;