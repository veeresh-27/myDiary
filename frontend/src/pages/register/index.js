import React from "react";

const Register = () => {

  return (
        <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-background">
            <div>
                <a href="/">
                    <h3 className="text-4xl font-bold text-primary">
                        Register
                    </h3>
                </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                <form>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 undefined"> Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input type="text" name="name" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-opacity-50"  />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label  htmlFor="email"  className="block text-sm font-medium text-gray-700 undefined">Email</label>
                        <div className="flex flex-col items-start">
                            <input type="email" name="email" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-opacity-50"/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label  htmlFor="password" className="block text-sm font-medium text-gray-700 undefined"  >
                            Password
                        </label>
                        <div className="flex flex-col items-start">
                            <input type="password" name="password"  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-opacity-50" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label  htmlFor="password_confirmation"  className="block text-sm font-medium text-gray-700 undefined" > Confirm Password </label>
                        <div className="flex flex-col items-start">
                            <input type="password" name="password_confirmation" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-opacity-50"/>
                        </div>
                    </div>
                    <a href="#"  className="text-xs text-gray-600 hover:underline" >Forget Password?</a>
                    <div className="flex items-center mt-4">
                    
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-primary focus:outline-none ">  Register </button>
                        
                    </div>
                   
                </form>
               
                <div className="mt-4 text-grey-600">  Already have an account?{" "}
                    <span> <a className="text-primary hover:underline" href="#"> Log in </a></span>
                </div>
                <div className="flex items-center w-full my-4">
                    {/* <hr className="w-full" /> */}
                    </div>
                    </div>
                    </div></div>
    
   
  );
}
    
    
    
      
    
   

export default Register;
