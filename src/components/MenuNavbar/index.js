import React from "react";

export default function IndexNavbar() {
  return (
    <div className="bg-white fixed left-0 right-0 bottom-0">
      <div className="flex justify-around xl:w-7/12 xl:mx-auto p-2">
        <div className="flex flex-col items-center">
          <img
            src="https://static-cdn-ph.pizzahut.co.id/icons/home-active.png"
            alt="Home"
            className="w-7 h-7"
          />
          <span className="text-[#C8102E] text-xs">Home</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://static-cdn-ph.pizzahut.co.id/icons/shopping-list.png"
            alt="My Order"
            className="w-7 h-7"
          />
          <span className="text-xs">My Order</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://static-cdn-ph.pizzahut.co.id/icons/ph-rewards.gif"
            alt="Hut Rewards"
            className="w-5 h-7"
          />
          <span className="text-xs">Hut Rewards</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="	https://static-cdn-ph.pizzahut.co.id/icons/cart.png"
            alt="Cart"
            className="w-7 h-7"
          />
          <span className="text-xs">Cart</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="	https://static-cdn-ph.pizzahut.co.id/icons/user.png"
            alt="Account"
            className="w-7 h-7"
          />
          <span className="text-xs">Account</span>
        </div>
      </div>
    </div>
  );
}
