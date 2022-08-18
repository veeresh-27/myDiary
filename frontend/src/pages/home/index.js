import React from "react";
import { motion } from "framer-motion";
import MainScreen from "../../components/mainScreen";
import { IconDelete } from "../../assets/icons";

const Home = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 1 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.2 }}>
      <MainScreen title="Welcome to Home">
        <IconDelete/>
      </MainScreen>
    </motion.div>
  );
};

export default Home;
