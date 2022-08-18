import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: { opacity: 0 },
};

const MainScreen = ({ title, children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen gap-3 px-3 py-5 md:px-5 lg:px-14 xl:px-20">
      <div className="text-lg font-normal sm:text-3xl md:text-4xl lg:text-5xl">{title}</div>
      <hr className="h-0.5 bg-gray-200 mb-3" />
      <AnimatePresence exitBeforeEnter className="flex flex-col gap-3">
        <motion.div initial={{ opacity: 0 }} animate="enter" variants={variants} exit="exit">
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainScreen;
