import React from "react";
import MainScreen from "../../components/mainScreen";
import NoteCard from "../../components/noteCard";

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
  return (
    <div>
      <MainScreen title="Welcome to notes">
        <div>
          <button className="bg-blue-500 hover:scale-105 ease-in-out text-white font-semibold  py-2 px-4 rounded-md">
            Create Note
          </button>
        </div>
        <div>
          {info.map((item) => (
            <NoteCard key={item.id} title={item.title} content={item.content} id={item.id} />
          ))}
        </div>
        
      </MainScreen>
    </div>
  );
};

export default Notes;
