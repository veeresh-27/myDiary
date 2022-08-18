import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="justify-center bg-gray-100 page-row">
      <div className="flex flex-col justify-center w-full h-full gap-4 pt-20">
        <h1 className="flex self-center text-2xl font-semibold text-center sm:text-4xl md:text-5xl lg:text-6xl">Welcome to My Diary</h1>
        <div className="text-sm text-center md:text-md lg:text-xl">Place for all of your thoughts</div>
        <div className="flex justify-center w-full gap-6 mt-6">
          <button
            className="px-5 py-3 text-xl font-semibold text-white bg-blue-500 rounded-3xl hover:bg-blue-800 "
            onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            className="px-5 py-3 text-xl font-semibold text-white bg-blue-500 rounded-3xl hover:bg-blue-800 "
            onClick={() => navigate("/register")}>
            Sign Up
          </button>
        </div>
        <div className="flex self-center justify-center w-2/4 gap-6 mt-6 text-xs text-center ">
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
        </div>
      </div>
    </div>
  );
};

export default Landing;
