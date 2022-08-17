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
      className="flex flex-col border border-gray-300 rounded mt-1"
      initial="hidden"
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}>
      <div className="bg-gray-200 p-3  flex justify-between rounded-t-sm">
        <div className="  text-sm font-medium sm:text-md w-full " onClick={() => setShow(!show)}>
          {title}
        </div>
        <div className="flex ">
          <div
            className="flex cursor-pointer  text-gray-500"
            onClick={() => navigate(`/notes/${id}`)}>
            <IconEdit />
          </div>
          <div className="flex cursor-pointer text-gray-500" onClick={handleDelete}>
            {" "}
            <IconTrash />
          </div>
        </div>
      </div>
      <Transition
        show={show}
        // className="transition-all ease-in-out duration-100"
      >
        <motion.div
          className="p-3 flex flex-col gap-1  ease-in-out duration-100"
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}>
          <div className="text-lg font-regular">{content}</div>
          <div className="text-gray-600 text-sm font-light">--Created on -- date </div>
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
    <div className="flex flex-col border border-gray-300 rounded mt-1 ">
      <div className="bg-gray-200 p-3 border-b border-gray-300 flex justify-between">
        <div className=" font-medium text w-full" onClick={() => setShow(!show)}>
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
        <div className="p-3 flex flex-col gap-1 ease-in-out duration-500">
          <div className="text-lg font-regular">{content}</div>
          <div className="text-gray-600 text-sm font-light">--Created on -- </div>
        </div>
      </Transition>
    </div>
  );
};

export default NoteCard;




*/
