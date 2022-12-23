import * as React from "react";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";

import {priceShow,priceHide} from "../Worry/worrySlice";

import doctor from '../../icons/menu/doctor.svg';
import service from '../../icons/menu/service.svg';
import diploma from '../../icons/menu/diploma.svg';
import works from '../../icons/menu/works.svg';
import price from '../../icons/menu/price.svg';
import phone from '../../icons/menu/phone.svg';
import standart from '../../icons/menu/standart.svg';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const objects = [
  [
    'послуги',
    '#worry',
    service
  ],
  [
    'ціни',
    '#worry',
    price
  ],
  [
    'лікарі',
    '#doctors',
    doctor
  ],
  [
    'стандари',
    '#standart',
    standart
  ],
  [
    'наші роботи',
    '#works',
    works
  ],
  [
    'про клініку',
    '#diploma',
    diploma
  ],
  [
    "зв'язатися",
    '#form',
    phone
  ],
]

export const MenuItem = ({ i, toggle }) => {


  const dispatch = useDispatch();

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder"  ><img src={objects[i][2]} alt="icon" /></div>
      {
        objects[i][0] !== 'ціни' && objects[i][0] !== 'послуги' ? <a onClick={() => toggle()} href={objects[i][1]} className="text-placeholder" >{objects[i][0]}</a> 
        : 
        objects[i][0] === 'ціни' ? <a onClick={() => {toggle(); dispatch(priceShow())}} href={objects[i][1]} className="text-placeholder" >{objects[i][0]}</a> 
        :
        <a onClick={() => {toggle(); dispatch(priceHide())}} href={objects[i][1]} className="text-placeholder" >{objects[i][0]}</a>
      }
    </motion.li>
  );
};
