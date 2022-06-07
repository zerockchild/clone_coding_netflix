import styled from "styled-components";

export const NavContainer = styled.div`
    position: fixed;
    top:0px;
    left: 0px;
    width: 100%;
    z-index: 1;
    background: ${({scrollY}) => (scrollY === 0 ? "linear-gradient( to bottom, rgb(20, 20, 20), rgba(20, 20, 20, .0) )" : "rgb(20, 20, 20)")};
    height: 68px;
    padding: 0 60px;
    display: flex;
        
    a {
    
        margin-top:auto;
        margin-bottom:auto;
        margin-right: 25px;
    }
      
    img{
        height: 31px;
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


export const HeaderContainer = styled.div`
    width: 98.7vw;
    height:100vh; 
`;

export const MovieListContainer = styled.div`
    position:absolute;
    top: 90vh;     
`;

export const FooterContainer =styled.div`
    
`;