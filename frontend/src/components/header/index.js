import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "../dropdown";

function Header() {
  const navigate = useNavigate();
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
  const navStyle = ({ isActive }) => {
    return isActive ? "p-3 bg-blue-700 cursor-pointer" : "p-3 hover:bg-blue-700 cursor-pointer";
  };
  return (
    <div className="sticky top-0 z-50 md:px-5 lg:px-14 xl:px-20  bg-blue-900 flex justify-between w-full h-14 items-center">
      <div className="text-white text-3xl p-3 cursor-pointer" onClick={() => navigate("/")}>
        <h1>My&nbsp;Diary</h1>
      </div>

      <div className="flex justify-between text-white text-xl items-center relative gap-2">
        <form className="flex gap-1 ">
          <input
            className="flex text-sm p-2 border-none outline-none rounded-md text-gray-700"
            type="text"
            placeholder="Search"
          />
          <button className="hidden " type="submit">
            Search
          </button>
        </form>
        <NavLink to="/home" className={navStyle}>
          Home
        </NavLink>
        <NavLink to="/notes" className={navStyle}>
          Notes
        </NavLink>
        <NavLink to="/calendar" className={navStyle}>
          Calendar
        </NavLink>
        <Dropdown title="User" options={options} />
      </div>
    </div>
  );
}

export default Header;
