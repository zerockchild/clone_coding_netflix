import {useEffect, useState} from "react";
import requests from "../../requests";
import {Item, MovieTitle, Row, RowContainer, Slider} from "./style/DisplayMovieRowStyle";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import {useWindowSize} from "../../hooks/useWindowSize";
import axios from "axios";
import {useQuery} from "react-query";
import {Link} from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function DisplayMovieRow(props) {
    const windowDimensions = useWindowSize();
    const {width} = windowDimensions;
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState({});
    const getMovie = async () =>{
        const response = await axios.get(props.request);
        setMovieList(response.data.results)
        console.log(response.data.results)
        setLoading(false);
    }
    const clickMovie = (movie) => {
        console.log(movie)
        props.isOpen(true);
        props.currentMovie(movie);
        props.category();
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
                            {movieList.map((movie, index) => (
                                <SwiperSlide key = {index} onClick={() => {
                                    clickMovie(movie);
                                }}>
                                    <Item key={movie.id}>
                                        <Link to = {`/${movie.id}`}>
                                        <img
                                            src={process.env.REACT_APP_TMDB_THUMBNAIL_IMAGE_URL + movie.poster_path}/>
                                        </Link>
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