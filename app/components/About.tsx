import { motion } from "framer-motion";

import me from "../../public/me.jpg";

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
        alt="Your Image"
        initial="initial"
        whileHover="hover"
      />
      <div className="font-bold text-2xl">
        <span className="text-purple-700">T</span>az Lowry.
      </div>
      <div className="flex space-x-5 pt-6">
        <a
          href="https://www.linkedin.com/in/travontazlowry/"
          target="_blank"
          rel="noreferrer"
        >
          Visit my LinkedIn profile
        </a>
      </div>
    </div>
  );
};

export default About;
