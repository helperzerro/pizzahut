import React from "react";
import { Navbar, Footer, MenuNavbar, Input } from "../../components";

export default function MyOrders() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[2px] bg-gray-600 blur-[1px]"></div>

      <div className="bg-[#EEF0F1]">
        <div className=" flex items-center p-6 xl:w-8/12 xl:mx-auto">
          <a href="/" className="text-3xl text-gray-500">
            &#60;
          </a>
          <p className="text-[38px] font-bold w-3/4 text-center mx-auto leading-normal sm:w-full md:-translate-x-2">
            TRACK YOUR ORDER
          </p>
        </div>

        <div className="p-5 bg-white xl:w-8/12 xl:mx-auto">
          <div className="border border-gray-500 rounded-md px-5 py-7 lg:w-7/12 lg:mx-auto">
            <div>
              <span className="text-gray-500 text-sm">Order Number</span>
              <span className="text-red-500"> *</span>
            </div>
            <Input />
          </div>

          <div className="border border-gray-500 rounded-md p-5 my-6 lg:w-7/12 lg:mx-auto">
            <button className="rounded-md text-center text-white bg-red-700 hover:bg-red-600 w-full h-10 text-lg">
              Search
            </button>
          </div>
        </div>
      </div>

      <Footer />

      <MenuNavbar />
    </div>
  );
}
