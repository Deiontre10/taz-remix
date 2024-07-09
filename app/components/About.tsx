import { motion } from "framer-motion";

import me from "../../public/me.jpg";
import TextMotion from "./TextMotion";

const hoverEffect = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};
const fadeEffect = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const About = () => {
  return (
    <div className="grid max-w-prose gap-2.5 justify-items-center py-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={me}
        className="h-48 w-48 rounded-full object-cover "
        alt="Taz Headshot"
        variants={hoverEffect}
        initial="initial"
        whileHover="hover"
      />
      <motion.div
        variants={fadeEffect}
        initial="hidden"
        animate="visible"
        className="text-2xl text-zinc-900 dark:text-slate-200 font-bold leading-8 tracking-tight"
      >
        <span className="text-purple-700">T</span>az Lowry.
      </motion.div>
      <TextMotion
        duration={1}
        className="text-zinc-600 dark:text-gray-400 font-bold max-w-sm text-center"
      >
        Software engineer who&apos;s a hooper and a gamer.
      </TextMotion>
      <div className="flex space-x-5 pt-6">
        <a
          href="https://www.linkedin.com/in/travontazlowry/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className="w-8 h-8 text-zinc-900 dark:text-slate-100 dark:hover:text-slate-300"
            whileHover="hover"
            variants={fadeEffect}
            initial="initial"
          >
            <motion.path
              d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2 }}
            />
          </motion.svg>
        </a>
      </div>
    </div>
  );
};

export default About;
