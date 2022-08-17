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
    <div className="px-3 py-5 md:px-5 lg:px-14 xl:px-20 flex flex-col w-full gap-3 min-h-screen">
      <div className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{title}</div>
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
