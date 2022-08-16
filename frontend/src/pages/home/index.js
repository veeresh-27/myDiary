import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 1 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.2 }}>
      Home
    </motion.div>
  );
};

export default Home;
