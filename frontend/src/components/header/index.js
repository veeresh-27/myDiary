import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="bg-blue-900 flex justify-between px-20 sticky top-0 w-full h-14 items-center">
      <div className="text-white text-3xl p-3">
        <h1>My Diary</h1>
      </div>
      <div className="flex justify-between text-white text-xl items-center">
        <NavLink to="/" className="p-3 hover:bg-blue-800 cursor-pointer">
          Home
        </NavLink>
        <NavLink to="/" className="p-3 hover:bg-blue-800 cursor-pointer">
          Notes
        </NavLink>
        <NavLink to="/" className="p-3 hover:bg-blue-800 cursor-pointer">
          Calendar
        </NavLink>
        <NavLink to="/" className="p-3 hover:bg-blue-800 cursor-pointer">
          User
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
