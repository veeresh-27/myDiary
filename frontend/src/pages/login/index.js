import React from "react";

const Login = () => {
  return (
    <section className="h-screen">
     <div className="h-full px-6 text-gray-800 bg-background">
     <div
          className="flex flex-wrap items-center justify-center h-full xl:justify-center lg:justify-between g-6">
          <div   className="mb-12 grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 md:mb-0">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"  className="w-full"   alt="Sample image" />
             </div>
          <div className="mb-12 xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0">
            <form>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>
                <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"  className="inline-block p-3 mx-1 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"  className="w-4 h-4 ">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
         </svg>
         </button>
    
         <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"  className="inline-block p-3 mx-1 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"  className="w-4 h-4 ">
        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
         </svg>
         </button>
    </div>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="mx-4 mb-0 font-semibold text-center">Or</p>
          </div>
          <div className="mb-6">
            <input type="text" className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"   
 placeholder="Email address"/>
          </div>


          <div className="mb-6">
            <input  type="password"
              className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"/>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="form-group form-check">
              <input type="checkbox"  className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none" />
              <label className="inline-block text-gray-800 form-check-label" >Remember me</label>
              </div>
            <a href="#!" className="text-gray-800">Forgot password?</a>
          </div>

          <div className="text-center lg:text-left">
            <button type="button"
              className="inline-block py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" >Login</button>
            <p className="pt-1 mt-2 mb-0 text-sm font-semibold"> Don't have an account?
              <a  href="#!" className="m-1.5 text-gray-600 underline transition duration-200 ease-in-out " >Register</a >
            </p>
          </div>
        </form>
      </div>
     </div>
  </div>
</section>
);
 };


export default Login;
