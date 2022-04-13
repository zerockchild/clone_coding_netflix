import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #111;
  }
  
  .row__poster {
    width: 100%;
    object-fit: contain;
    max-height: 100px;
    margin-right: 10px;
    transition: transform 450ms;
  }
  
  .row__posters {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
  }
  
  .row__poster:hover {
    transform: scale(1.08);
  }
  
  .row__posters::-webkit-scrollbar {
    display: none;
  }
  
  .row__posterLarge {
    max-height: 250px;
  }
  
  .row__posterLarge:hover {
    transform: scale(1.09);
  }
  
  .row {
    color: white;
    margin-left: 20px;
  }
  
  /* banner */
  .banner {
    background-image: url('images/banner.jpg');
    background-size: cover;
    background-position: center center;
    color: white;
    object-fit: contain;
    height: 448px;
  }
  
  .banner__contents {
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
  }
  
  .banner__title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }
  
  .banner__description {
    width: 70rem;
    line-height: 1.5;
    padding-top: 1rem;
    font-size: 1.1rem;
    max-width: 70rem;
    height: 180px;
  }
  
  .banner__button {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
  }
  
  .banner__button:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
  
  .banner--fadeBottom {
    margin-top: 145px;
    height: 7.4rem;
    background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
  }
  
  /* nav */
  
  .nav__logo {
    width: 80px;
    object-fit: contain;
  }
  
  .nav__avatar {
    width: 30px;
    object-fit: contain;
  }
  
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    /* background-color: #111; */
    z-index: 1;
    transition-timing-function: ease-in;
    transition: all 0.5s;
  }
  
  .nav__black {
    background-color: #111;
  }

`