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
    return isActive ? "p-3 bg-blue-600 text-white cursor-pointer rounded-xl " : "p-3 hover:bg-blue-600  cursor-pointer rounded-2xl  ";
  };
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full bg-slate-200 md:px-5 lg:px-14 xl:px-20 h-14 ">
      <div className="p-3 text-3xl text-black cursor-pointer sm:text-2xl md:text-3xl lg:text-4xl" onClick={() => navigate("/")}>
        <h1>My&nbsp;Diary</h1>
      </div>

      <div className="relative flex items-center justify-between gap-2 text-xl text-black">
        <form className="flex gap-1 ">
          <input
            className="flex w-0 p-2 text-sm border-gray-400 ext-gray-700 outline rounded-xl sm:w-10 md:w-50 lg:w-full "
            type="text"
            placeholder="Search"
          />
          <button className="hidden " type="submit">
            Search j
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
