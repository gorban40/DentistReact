import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';


// import img_1 from '../../../img/promo/promo__slider.jpg';
import img_2 from '../../../img/promo/promo__slider_2.gif';
import img_3 from '../../../img/promo/promo__slider_3.gif';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import './Slider.scss'

const Slider = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{delay: 2500, pauseOnMouseEnter:true, disableOnInteraction: false}}
        loop={true}
        navigation={{clickable: true}}
        pagination={{clickable: true}}
        speed={500}
        className={'slider'}
        >
            <SwiperSlide>
                    <img className="slider__img" src={img_3} alt="First slide"/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className="slider__img" src={img_2} alt="First slide"/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className="slider__img" src={img_3} alt="First slide"/>
            </SwiperSlide>
        </Swiper>
        // <Carousel 
        //     interval= '1000'
        //     className="slider"
        //     >
        //     <Carousel.Item>

        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img className="d-block w-100 h-500px"
        //             src={img_2}
        //             alt="Second slide"
        //         />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img className="d-block w-100 h-500px"
        //             src={img_3}
        //             alt="Third slide"
        //         />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img className="d-block w-100 h-500px"
        //             src={img_3}
        //             alt="Fourth slide"
        //         />
        //     </Carousel.Item>
        // </Carousel>
    )
}

export default Slider;