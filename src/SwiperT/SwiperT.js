import "./SwiperT.css";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Autoplay]);

class SwiperT extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="this-swiper">
                <Swiper
                    spaceBetween={50}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    slidesPerView={5}
                >

                    {Object.values(this.props.compayImg).map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="slider-itm">
                                    <img src={item} alt={index} />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        )
    }
}

export default SwiperT;