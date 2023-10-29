import React from "react";
import Input from "../Input";

export default function Login(props) {
  const handleCloseLogin = () => {
    props.handleCloseLogin();
  };

  return (
    <div>
      <div
        className="fixed top-0 right-0 left-0 bottom-0 bg-gray-600 bg-opacity-90 z-20 flex items-center"
        onClick={handleCloseLogin}
      >
        <div
          className="mx-auto bg-white w-[480px] rounded-xl pt-[60px] pb-14 px-8 z-30"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-center font-bold text-4xl mb-10">Login</p>
          <Input placeholder="Email" type="email" />
          <div className="h-2"></div>
          <Input placeholder="Password" type="password" />
          <div className="w-full text-end my-3 cursor-pointer text-[#C8102E]">
            Forget password?
          </div>
          <button className="w-full h-10 rounded-md bg-[#C8102E] text-center text-lg font-bold text-white">
            Login
          </button>

          <div className="flex justify-between items-center px-3 my-4">
            <span className="h-[2px] bg-gray-300 w-full"></span>
            <span className="w-72 text-center text-sm">Or sign in with</span>
            <span className="h-[2px] bg-gray-300 w-full"></span>
          </div>

          <div className="flex items-center my-4 border border-gray-300 p-2 w-[200px] rounded-md text-sm font-semibold cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
              alt="google"
              className="w-5 h-5 mr-1"
            />
            <span>Daftar dengan Google</span>
          </div>

          <div className="text-center text-sm">
            <a href="/" className="text-[#C8102E]">
              Register Now
            </a>{" "}
            and enjoy free Pizza today
          </div>
        </div>
      </div>
    </div>
  );
}
