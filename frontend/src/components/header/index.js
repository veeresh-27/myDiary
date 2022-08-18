import { useNavigate } from "react-router-dom";
import Links from "../links";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full bg-background md:px-5 lg:px-14 xl:px-20 h-14 ">
      <div
        className="p-3 text-3xl text-primary cursor-pointer font-medium sm:text-2xl md:text-3xl lg:text-4xl"
        onClick={() => navigate("/")}>
        <h1>My&nbsp;Diary</h1>
      </div>
      <Links />
    </div>
  );
}

export default Header;
