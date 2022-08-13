import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="page-row  justify-center bg-gray-100">
      <div className="w-full pt-20 h-full flex flex-col gap-4 justify-center">
        <h1 className="text-8xl font-semibold self-center text-center flex">Welcome to My Diary</h1>
        <div className="text-xl text-center">Place for all of your thoughts</div>
        <div className="flex w-full justify-center gap-6 mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-semibold text-xl  py-3 px-5 rounded-md"
            onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-semibold text-xl  py-3 px-5 rounded-md"
            onClick={() => navigate("/register")}>
            Sign Up
          </button>
        </div>
        <div className="flex w-2/4 justify-center gap-6 mt-6 text-center text-xs self-center ">
          <span>
            {" "}
            By clicking “Continue with Google/Email/SAML” above, you acknowledge that you have read
            and understood, and agree to Notion's{" "}
            <span className="text-gray-500 underline cursor-pointer font-light hover:text-gray-900 ">
              Terms &#38; conditions
            </span>{" "}
            and{" "}
            <span className="text-gray-500 underline cursor-pointer font-light hover:text-gray-900">
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
