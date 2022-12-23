import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    display: 'block'
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    display: 'none'
  }
};

export const Navigation = ({toggle}) => (
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem toggle={toggle} i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4, 5, 6];
