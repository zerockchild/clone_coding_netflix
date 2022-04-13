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
    background-size: cover;
    background-position: center center;
    color: white;
    object-fit: contain;
    height: 448px;
  }
  
  .banner__contents {
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
    width: 130px;
    object-fit: contain;
  }
  
  .nav__avatar {
    width: 50px;
    object-fit: contain;
  }
  
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: space-between;
    background-color: #09080a;
    z-index: 1000;
    transition-timing-function: ease-in;
    opacity: 0.3;
    transition: all 0.2s;
  }
  
  .nav__black {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: space-between;
    background-color: #09080a;
    z-index: 1000;
    transition-timing-function: ease-in;
  }

  /* appLayout */
  .appLayout {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* mainContents 관련 */

  .container {
    position:absolute;
    top: 75vh;   
  }

  .rowContainer {
    width: 97.5vw;
  }

  .mainContentsMovieTitle {
    margin-left: 60px;
  }

  .DisplayMovies {
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
  }

  .Slider {
    margin-left: 60px;
  }

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

  .displayMoviesItems {
    position: relative;
    flex-direction: column;
    cursor: pointer;
    transition: all 450ms !important;
    transform: scale(0.9);
    
    &:hover{
        transition-delay: 450ms !important;
        transform: scale(1.0);
        z-index:60;
    }
  }

`