import React, { useState } from "react";
import DeliveryBike from "../../images/delivery-bike.gif";
import Collection from "../../images/collection.gif";
import GeoRed from "../../images/icon-geo-red.svg";

export default function Address() {
  const [isActiveDelivery, setIsActiveDelivery] = useState(true);
  const [isActiveTakeaway, setIsActiveTakeaway] = useState(false);

  const handleButtonClickDelivery = () => {
    setIsActiveDelivery(!isActiveDelivery);
    setIsActiveTakeaway(!isActiveTakeaway);
  };
  const handleButtonClickTakeaway = () => {
    setIsActiveTakeaway(!isActiveTakeaway);
    setIsActiveDelivery(!isActiveDelivery);
  };

  return (
    <div className=" relative -top-5">
      <div className="grid grid-flow-cols justify-center">
        <div
          className={
            isActiveDelivery
              ? "flex items-center h-[64px] w-60 justify-center mr-[2px] rounded-t-lg bg-white z-10 cursor-pointer"
              : "flex items-center self-end h-[54px] mt-[10px] w-60 justify-center mr-[2px]  rounded-t-lg bg-[#d9dde3] z-10 cursor-pointer"
          }
          onClick={handleButtonClickDelivery}
        >
          <img
            src={DeliveryBike}
            alt="delivery-bike"
            className={
              isActiveDelivery
                ? "object-contain h-8 w-8 mr-[5px]"
                : "object-contain h-8 w-8 mr-[5px] filter grayscale"
            }
          />
          <span
            className={
              isActiveDelivery
                ? "text-[17px] font-semibold text-[#da291c]"
                : "text-[17px] font-semibold text-[#454545]"
            }
          >
            Delivery
          </span>
        </div>

        <div
          className={
            isActiveTakeaway
              ? "flex items-center h-[64px] w-60 justify-center rounded-t-lg bg-white z-10 cursor-pointer"
              : "flex items-center self-end h-[54px] w-60 justify-center rounded-t-lg bg-[#d9dde3] z-10 cursor-pointer"
          }
          onClick={handleButtonClickTakeaway}
        >
          <img
            src={Collection}
            alt="collection"
            className={
              isActiveTakeaway
                ? "object-contain h-8 w-8 mr-[5px]"
                : "object-contain h-8 w-8 mr-[5px] filter grayscale"
            }
          />
          <span
            className={
              isActiveTakeaway
                ? "text-[17px] font-semibold text-[#da291c]"
                : "text-[17px] font-semibold text-[#454545]"
            }
          >
            Takeaway
          </span>
        </div>

        <div className="col-span-2 p-5 shadow-custom">
          <span className="font-semibold text-[15px]">
            Please type your address
          </span>

          <div className="flex border justify-between rounded-r-md">
            <input
              placeholder={
                isActiveDelivery ? "e.g. Jalan Tebet Raya" : "Tulis Alamat"
              }
              className="px-4 text-[1.2rem] w-full outline-none"
            />

            <button className="rounded-md w-[73px] h-12 bg-[#c8102e] text-[17px] px-2 text-white">
              Search
            </button>
          </div>

          <div className="flex items-center border px-[10px] py-[13px]">
            <div className="flex items-center cursor-pointer">
              <img
                src={GeoRed}
                className="h-[14px] w-[14px] mr-[10px]"
                alt="icon-geo-red"
              />
              <span className="text-[#da291c] text-[14px]">
                {isActiveDelivery
                  ? "Or use my current location"
                  : "Find my nearest Hut"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
