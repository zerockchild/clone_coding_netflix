import {useEffect, useState} from "react";
import requests from "../../requests";
import {Item, Row, RowContainer, Slider} from "./style/DisplayMovieRowStyle";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function DisplayMovieRow({request, title}) {
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState({});
    const getMovie = async () =>{
        const json = await(
            await fetch(request)
        ).json()
        setMovieList(json.results)
        setLoading(false)
        console.log(movieList)
    }
    useEffect(() => {
        getMovie();
    }, [])
    return(
        <RowContainer>
            <div>{title}</div>
            <Slider>
                <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    grabCursor={false}
                    draggable={false}
                    slidesPerView={8}
                    slidesPerGroup= {8}
                >
                    {loading ? null :
                        <div>
                            {movieList.map((movie) => (
                                <SwiperSlide>
                                    <Item key={movie.id}>
                                        <img
                                            src={'https://www.themoviedb.org/t/p/w220_and_h330_face' + movie.poster_path}/>
                                    </Item>
                                </SwiperSlide>
                            ))}
                        </div>}
                </Swiper>
            </Slider>
        </RowContainer>
    )
}

export default DisplayMovieRow