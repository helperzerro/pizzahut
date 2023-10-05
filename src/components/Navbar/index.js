import React from "react";
import logo from "../../images/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between py-4 px-3">
      <div>
        <img
          src={logo}
          alt="logo-pizza"
          className="object-contain h-16 w-16 cursor-pointer"
        />
      </div>

      <div className="hidden md:flex items-center gap-6 font-montserrat text-[14px] font-semibold">
        <div className="text-[#c8102e] cursor-pointer">Home</div>
        <div className="cursor-pointer">My orders</div>
        <div className="cursor-pointer">My Rewards</div>
        <div>
          <button className="text-white rounded-lg bg-[#c8102e] p-2">
            Sign Up /Login
          </button>
        </div>
      </div>
    </div>
  );
}
