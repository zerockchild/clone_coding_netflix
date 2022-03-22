import {useEffect, useState} from "react";
import requests from "../../requests";
import {Item, MovieTitle, Row, RowContainer, Slider} from "./style/DisplayMovieRowStyle";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import {useWindowSize} from "../../hooks/useWindowSize";
import ModalMovieDetails from "../modalMovieDetails/ModalMovieDetails";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function DisplayMovieRow(props) {
    const windowDimensions = useWindowSize()
    const {width} = windowDimensions
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState({});
    const getMovie = async () =>{
        const json = await(
            await fetch(props.request)
        ).json()
        setMovieList(json.results)
        setLoading(false)
    }
    const clickMovie = () => {
        props.isOpen(true)
    }
    useEffect(() => {
        getMovie();
    }, [])
    return(
        <RowContainer>
            <MovieTitle>{props.title}</MovieTitle>
            {loading ? null :
            <Slider>
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    grabCursor={false}
                    scrollbar={{ draggable: false }}
                    breakpoints={{
                        1600: {
                            slidesPerView: 8,
                            slidesPerGroup: 8,
                        },
                        998: {
                            slidesPerView: 7,
                            slidesPerGroup: 7,
                        },
                        625: {
                            slidesPerView: 6,
                            slidesPerGroup: 6,
                        },
                        0: {
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                        },
                    }}
                    loop={true}
                    loopAdditionalSlides={0}
                >
                        <div>
                            {movieList.map((movie) => (
                                <SwiperSlide onClick={() => {
                                    console.log("click"+movie.title)
                                    clickMovie();
                                }}>
                                    <Item key={movie.id}>
                                        <img
                                            src={'https://www.themoviedb.org/t/p/w220_and_h330_face' + movie.poster_path}/>
                                    </Item>
                                </SwiperSlide>
                            ))}
                        </div>
                </Swiper>
            </Slider>}
        </RowContainer>
    )
}

export default DisplayMovieRow