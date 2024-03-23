"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  position: number;
};

const AnimatedSide: React.FC<Props> = ({ children, className, position }) => {
  const title = {
    initial: {
      opacity: 0,
      x: position,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={title}
      initial="initial"
      whileInView="animate"
      className={className}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSide;
