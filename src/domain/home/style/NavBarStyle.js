import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top:0px;
    left: 0px;
    width: 100%;
    z-index: 10000;
    background: ${({scrollY}) => (scrollY == 0 ? "linear-gradient( to bottom, rgb(20, 20, 20), rgba(20, 20, 20, .0) )" : "rgb(20, 20, 20)")};
    height: 68px;
    padding: 0 60px;
    display: flex;
        
    a {
        margin-right: 25px;
    }
      
    img{
        height: 68px;
    }
`;

export const MenuBar = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    font-size: 14px;
    
    li{
        margin-left: 20px;
        color: white;
    }
    a{
        text-decoration: none;
        cursor: pointer;
        color: #fff;
    }
`;

