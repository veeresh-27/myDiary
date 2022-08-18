import React, { useState, useEffect } from "react";
import { IconPlus } from "../../assets/icons";
import MainScreen from "../../components/mainScreen";
import NoteCard from "../../components/noteCard";
import { motion } from "framer-motion";
import { Reorder } from "framer-motion";
import axios from "axios";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("/app/info");
    setNotes(data);
  };
  useEffect(() => {
    fetchData(); 
  }, []);
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.2 }}>
      <MainScreen title="Welcome to Notes">
        <div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-600">
            <IconPlus />
          </motion.button>
        </div>
        <Reorder.Group
          axis="y"
          values={notes}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 1, damping: 8 }}
          onReorder={setNotes}>
          {notes.map((item) => (
            <Reorder.Item key={item.id} value={item}>
              <NoteCard key={item.id} title={item.title} content={item.content} id={item.id} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </MainScreen>
    </motion.div>
  );
};

export default Notes;
