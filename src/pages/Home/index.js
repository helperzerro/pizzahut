import React from "react";
import { Navbar, Address, Footer, IndexNavbar } from "../../components";
import Promo from "../../images/tablet-banner-blacktober.jpg";
import DealSlider from "../../components/DealSlider";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="h-[285px] md:h-[400px] overflow-hidden">
        <img src={Promo} alt="tablet-banner-blacktober" className="  w-full " />
      </div>

      <Address />

      <div className="flex justify-around items-center p-2 ">
        <span className="h-[1.6px] w-full bg-[#d9dde3]"></span>
        <span className="text-[25px] font-bold whitespace-nowrap text-center mx-3">
          Our Most Populer Deals
        </span>
        <span className="h-[1.6px] w-full bg-[#d9dde3]"></span>
      </div>

      <DealSlider />

      <div className="w-full text-center">
        <button className="bg-red-700 hover:bg-red-600 w-full text-white py-2 text-center mb-4 rounded-lg text-2xl sm:text-xl lg:w-6/12">
          Lihat semua deals
        </button>
      </div>

      <Footer />

      <IndexNavbar />
    </>
  );
}
// d9dde3
// 454545
