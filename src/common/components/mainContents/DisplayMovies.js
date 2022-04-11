import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

const { REACT_APP_TMDB_THUMBNAIL_IMAGE_URL } = process.env;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const DisplayMovies = ({ contents }) => {
    console.log('contents?.data?.results', contents?.data?.results);
    return (
        <div className='rowContainer'>
            <div className='Slider'>
                    <div>
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
                        {contents?.data?.results.map((content) => (
                            <SwiperSlide>
                                <div className='displayMoviesItems' key={content.id}>
                                    <img src={`${REACT_APP_TMDB_THUMBNAIL_IMAGE_URL}` + content.poster_path} />
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
            </div>   
        </div>
    );
};

export default DisplayMovies;