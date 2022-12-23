import { SwiperSlide, Swiper } from 'swiper/react';

import PrismaZoom from 'react-prismazoom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import diplom from '../../../icons/why_we/why_we_photo.png'

import './SliderDocuments.scss'

const SliderDocuments = () => {
  return (
    <div className="sliderDocuments">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
      >
        <SwiperSlide>
          <PrismaZoom minZoom={1} maxZoom={2}>
            <img src={diplom} alt="diploma" />
          </PrismaZoom>
          </SwiperSlide>

          <SwiperSlide>
          <PrismaZoom minZoom={1} maxZoom={2}>
            <img src={diplom} alt="diploma" />
          </PrismaZoom>
          </SwiperSlide>

          <SwiperSlide>
          <PrismaZoom minZoom={1} maxZoom={2}>
            <img src={diplom} alt="diploma" />
          </PrismaZoom>
          </SwiperSlide>

          <SwiperSlide>
          <PrismaZoom minZoom={1} maxZoom={2}>
            <img src={diplom} alt="diploma" />
          </PrismaZoom>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderDocuments;