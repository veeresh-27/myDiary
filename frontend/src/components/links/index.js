import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../dropdown";
import SearchBox from "../searchBox";

const Links = () => {
  const options = [
    {
      name: "Profile",
    },
    {
      name: "Settings",
    },
    {
      name: "Logout",
    },
  ];
  const navLinkTitle = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Notes",
      link: "/notes",
    },
    {
      name: "Calendar",
      link: "/calendar",
    },
  ];
  const navStyle = ({ isActive }) => {
    return isActive
      ? "p-3 text-blue-600 text-white cursor-pointer scale-110"
      : "p-3 hover:text-blue-600 cursor-pointer trasnition duration-200 ease-in-out hover:scale-110";
  };
  return (
    <div className="relative flex items-center justify-between gap-2 text-xl text-black font-medium">
      <SearchBox />
      {navLinkTitle.map(({ name, link, method }, index) => (
        <NavLink key={index} to={`${link}`} className={navStyle}>
          {name}
        </NavLink>
      ))}

      <Dropdown title="User" options={options} />
    </div>
  );
};

export default Links;
