import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { IconEdit, IconTrash } from "../../assets/icons";

const NoteCard = ({ title, content, id }) => {
  const [show, setShow] = useState(false);
  var navigate = useNavigate();
  const handleDelete = () => {
    alert("Are you sure you want to delete this note?");
  };

  return (
    <motion.div
      className="flex flex-col mt-2 border-gray-300 shadow-md hover:shadow-sm"
      initial="hidden"
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}>
      <div className="flex justify-between p-3 bg-gray-200 rounded-lg cursor-pointer ">
        <div className="w-full text-sm font-medium sm:text-md" onClick={() => setShow(!show)}>
          {title}
        </div>
        <div className="flex ">
          <div
            className="flex cursor-pointer text-grey-500 "
            onClick={() => navigate(`/notes/${id}`)}>
            <IconEdit />
          </div>
          <div className="flex cursor-pointer " onClick={handleDelete}>
            {" "}
            <IconTrash />
          </div>
        </div>
      </div>
      <Transition
        show={show}
        // className="transition-all duration-100 ease-in-out"
      >
        <motion.div
          className="flex flex-col gap-1 p-4 duration-100 ease-in-out rounded-sm bg-slate-100"
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}>
          <div className="text-lg font-regular">{content}</div>
          <div className="text-sm font-light text-gray-600">--Created on -- date </div>
        </motion.div>
      </Transition>
    </motion.div>
  );
};

export default NoteCard;

/*
import React, { useState } from "react";
import Dropdown from "../../components/dropdown";
import { useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const NoteCard = ({ title, content, id }) => {
  const [show, setShow] = useState(false);
  var navigate = useNavigate();
  const handleDelete = () => {
    alert("Are you sure you want to delete this note?");
  };
  const options = [
    {
      name: "Edit",
      method: () => navigate(`/notes/${id}`),
    },
    {
      name: "Delete",
      method: () => handleDelete(),
    },
  ];
  return (
    <div className="flex flex-col mt-1 border border-gray-300 rounded ">
      <div className="flex justify-between p-3 bg-gray-200 border-b border-gray-300">
        <div className="w-full font-medium text" onClick={() => setShow(!show)}>
          {title}
        </div>
        <div>
          <Dropdown options={options} mode={true} />
        </div>
      </div>
      <Transition
        show={show}
        enter="transition ease-in-out  duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in-out duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <div className="flex flex-col gap-1 p-3 duration-500 ease-in-out">
          <div className="text-lg font-regular">{content}</div>
          <div className="text-sm font-light text-gray-600">--Created on -- </div>
        </div>
      </Transition>
    </div>
  );
};

export default NoteCard;




*/
