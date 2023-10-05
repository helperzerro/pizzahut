import React from "react";
import { Navbar, Address } from "../../components";
import Promo from "../../images/promo.png";

export default function Home() {
  return (
    <>
      <Navbar />

      <div>
        <img src={Promo} alt="Promo" />
      </div>

      <Address />

      <div className="flex justify-around items-center mt-24 p-2">
        <span className="h-[1.6px] w-full bg-[#d9dde3]"></span>
        <span className="text-[25px] font-bold whitespace-nowrap text-center mx-3">
          Our Most Populer Deals
        </span>
        <span className="h-[1.6px] w-full bg-[#d9dde3]"></span>
      </div>
    </>
  );
}
// d9dde3
// 454545
