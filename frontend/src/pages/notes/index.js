import React, { useState } from "react";
import { IconPlus } from "../../assets/icons";
import MainScreen from "../../components/mainScreen";
import NoteCard from "../../components/noteCard";
import { motion } from "framer-motion";
import { Reorder } from "framer-motion";

const info = [
  {
    id: "1",
    title: "Day 1 of college",
    content: "I made a few new friends and introduced myself to a lot of new teachers.",
    category: "College",
  },
  {
    id: "2",
    title: "Learned some Node JS",
    content: "Learned how to create a server in node JS and my first API",
    category: "Learning",
  },
  {
    id: "3",
    title: "Watched some Anime",
    content: "Finished 2 seasons of Attack on Titan and My Hero academia.",
    category: "Entertainment",
  },
  {
    id: 4,
    title: "Started React JS",
    content:
      "Made my first App in React JS, feels awesome to learn something new. I aim to be a full stack dev someday",
    category: "Learning",
  },
];

const Notes = () => {
  const [items, setItems] = useState(info);
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.2 }}>
      <MainScreen title="Welcome to notes">
        <div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold  py-2 px-4 rounded-md">
            <IconPlus />
          </motion.button>
        </div>
        <Reorder.Group
          axis="y"
          values={items}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 1, damping: 8 }}
          onReorder={setItems}>
          {items.map((item) => (
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
