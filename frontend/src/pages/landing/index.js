import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="justify-center bg-background page-row">
      <div className="flex flex-col justify-center w-full h-full gap-4 pt-20">
        <h1 className="flex self-center pt-20 text-xl font-bold text-center sm:text-3xl md:text-4xl lg:text-6xl">
          Welcome to My Diary
        </h1>
        <h3 className="flex self-center font-medium text-center text-md sm:text-2xl md:text-3xl lg:text-4xl"> Tame your work, organize your life</h3>
        <div className="text-xs text-center text-gray-400 font-sm md:text-md lg:text-xl ">
        Remember everything and accomplish anything with the best notes app for tackling <br/>projects. Keep your notes, tasks, and schedule all in one place.
        </div>
        
        <div className="flex justify-center w-full gap-6 mt-6">
          <button
            className="px-4 py-2 font-semibold text-white bg-blue-500 text-md rounded-3xl hover:bg-blue-800 sm:px-3 md:px-4 lg:px-5 sm:text-lg md:text-xl lg:text-2xl"
            onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            className="px-4 font-semibold text-white bg-blue-500 text-md rounded-3xl hover:bg-blue-800 sm:px-3 md:px-4 lg:px-5 sm:text-lg md:text-xl lg:text-2xl"
            onClick={() => navigate("/register")}>
            Sign Up
          </button>
        </div>
        {/* <div className="flex self-center justify-center w-2/4 gap-6 mt-6 text-xs text-center ">
          <span>
            {" "}
            By clicking “Continue with Google/Email/SAML” above, you acknowledge that you have read
            and understood, and agree to Notion's{" "}
            <span className="font-light text-gray-500 underline cursor-pointer hover:text-gray-900 ">
              Terms &#38; conditions
            </span>{" "}
            and{" "}
            <span className="font-light text-gray-500 underline cursor-pointer hover:text-gray-900">
              Privacy Policy
            </span>
            .
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Landing;