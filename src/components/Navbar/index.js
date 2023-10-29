import React, { useState } from "react";
import logo from "../../images/logo.png";
import Login from "../Login";

export default function Navbar() {
  const [nLogin, setLogin] = useState(false);

  const handleButtonLogin = () => {
    setLogin(true);
  };

  const handleCloseLogin = () => {
    setLogin(false);
  };

  return (
    <div className="flex justify-center container mx-auto px-3 md:py-4 md:justify-between">
      <div>
        <img
          src={logo}
          alt="logo-pizza"
          className="object-contain h-14 w-14 cursor-pointer"
        />
      </div>

      {nLogin && <Login handleCloseLogin={handleCloseLogin} />}

      <div className="hidden md:flex items-center gap-6 font-montserrat text-[14px] font-semibold">
        <a href="/" className="text-[#c8102e]">
          Home
        </a>

        <a href="https://ppizzahut.netlify.app/orderTracking">My orders</a>

        <div className="cursor-pointer">My Rewards</div>
        <div>
          <button
            className="text-white rounded-lg bg-[#c8102e] p-2"
            onClick={handleButtonLogin}
          >
            Sign Up /Login
          </button>
        </div>
      </div>
    </div>
  );
}
