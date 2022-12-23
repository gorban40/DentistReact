import { Container } from "react-bootstrap";
import { useState } from "react";
import { motion } from "framer-motion";
import Grid from "./Grid/Grid";
import Price from './Price/Price';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { priceHide,priceShow } from "./worrySlice";

import click_img from '../../icons/service/pointed.png';

import '../../style/btn.scss'
import '../../style/title.scss';
import './Worry.scss';


const Worry = () => {
    const { showPrice } = useSelector(state => state.worry);
    const dispatch = useDispatch();


    return (

        <motion.section className="worry" id="worry">
            <Container>
                <div className="worry__header">
                    <div className="worry__wrapper_title">
                        <h2 className="title">Що вас турбує?</h2>
                        <div className="worry__wrapper_gray">
                            <button onClick={() => dispatch(priceHide())} className="title title_gray" >усі послуги</button>
                            <img src={click_img} alt="click" className='worry__img' />
                            <button onClick={() => dispatch(priceHide())} className="arrow__btn"></button>
                        </div>
                    </div>
                    <div className="worry__wrapper_btn">
                        <button onClick={() => dispatch(priceShow())} className="worry__btn">ціни</button>
                    </div>
                </div>
                {
                    showPrice ? <Price/> : <Grid/>
                }
            </Container>
        </motion.section>

    )
}

export default Worry; 