import { Container } from "react-bootstrap";
import CardWork from "./CardWork/CardWork";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import before from '../../icons/work/work__before.png'
import after from '../../icons/work/work__after.png'

import './Works.scss'

const Works = () => {
    return (
        <section id="works" className="works">
            <Container>
                <div className="works__wrapper_header">
                    <h2 className="title">Роботи</h2>
                </div>
                <div className="works__wrapper">
                    <Swiper
                          modules={[Navigation]}
                          spaceBetween={20}
                          allowTouchMove={false}
                          slidesPerView={3}
                          navigation
                          loop={true}
                          speed={1000}
                          breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            767: {
                                spaceBetween: 20,
                                slidesPerView: 1,
                            },
                            991: {
                                slidesPerView: 2,
                            },
                            1400: {
                                slidesPerView: 3
                            }
                          }}
                        >
                        <SwiperSlide>
                            <CardWork title='ТЕРАПЕВТИЧНІ ВІНІРИ' before={before} after={after} name='Ганна Вікторівна СВЯТОБОГОВА' job='Стоматолог-терапевт на Леніна 12' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWork title='ТЕРАПЕВТИЧНІ ВІНІРИ' before={before} after={after} name='Ганна Вікторівна СВЯТОБОГОВА' job='Стоматолог-терапевт на Леніна 12' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWork title='ТЕРАПЕВТИЧНІ ВІНІРИ' before={before} after={after} name='Ганна Вікторівна СВЯТОБОГОВА' job='Стоматолог-терапевт на Леніна 12' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWork title='ТЕРАПЕВТИЧНІ ВІНІРИ' before={before} after={after} name='Ганна Вікторівна СВЯТОБОГОВА' job='Стоматолог-терапевт на Леніна 12' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWork title='ТЕРАПЕВТИЧНІ ВІНІРИ' before={before} after={after} name='Ганна Вікторівна СВЯТОБОГОВА' job='Стоматолог-терапевт на Леніна 12' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWork title='ТЕРАПЕВТИЧНІ ВІНІРИ' before={before} after={after} name='Ганна Вікторівна СВЯТОБОГОВА' job='Стоматолог-терапевт на Леніна 12' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default Works;
