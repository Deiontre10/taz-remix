import { motion } from "framer-motion";
import React from "react";

interface MotionTextProps {
  duration?: number;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any; //  pass any additional props like 'className', 'style', etc.
}

const TextMotion: React.FC<MotionTextProps> = ({
  duration = 0.6,
  children,
  ...props
}) => {
  const slideUpFadeIn = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      variants={slideUpFadeIn}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default TextMotion;
