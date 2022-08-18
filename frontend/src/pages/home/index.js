import React from "react";
import { motion } from "framer-motion";
import MainScreen from "../../components/mainScreen";

const Home = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 1 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.2 }}>
      <MainScreen title="Welcome to Home"></MainScreen>
    </motion.div>
  );
};

export default Home;
