import { Swiper, SwiperSlide } from "swiper/react";

import partner from '../../../icons/why_we/why_we_partner.png'

import './SliderPartner.scss'

const SliderPartner = () => {
    return (
        <div className="sliderPartner">
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                loop={true}
                >
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
                <SwiperSlide><img src={partner} alt="licensiton" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderPartner;