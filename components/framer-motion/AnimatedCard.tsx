"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  index: number;
};

const AnimatedCard: React.FC<Props> = ({ children, index, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      key={index}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
