import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100}
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    tranistion: {
      y: { stiffness: 1000 }
    }
  }
};

const MobileNavItem =({ link }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={link.route}>{link.title}</Link>
    </motion.li>
  )
};

export default MobileNavItem;