import React from "react";

export default function Footer() {
  return (
    <div className="bg-black ">
      <div className="flex flex-wrap justify-between text-white p-5 gap-5 gap-y-12 sm:pt-12 xl:w-7/12 xl:mx-auto">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">ABOUT US</p>

          <div className="flex flex-col ml-1 gap-2">
            <span className="cursor-pointer">Brand Story</span>
            <span className="cursor-pointer">CSR</span>
            <span className="cursor-pointer">Gift Voucher</span>
            <span className="cursor-pointer">Outlet Locations</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">MY ACCOUNT</p>

          <div className="flex flex-col ml-1 gap-2">
            <span className="cursor-pointer">HUT REWARDS</span>
            <span className="cursor-pointer">Sign up</span>
            <span className="cursor-pointer">My Slice</span>
            <span className="cursor-pointer">Saved Address</span>
            <span className="cursor-pointer">Saved Outlet</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">SERVICE & POLICIES</p>

          <div className="flex flex-col ml-1 gap-2">
            <span className="cursor-pointer">Contact Us</span>
            <span className="cursor-pointer">FAQs</span>
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Terms of use</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">CONNECT WITH US</p>

          <div className="flex flex-col ml-1 gap-2">
            <div className="flex items-center cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="facebook"
                className="w-7 h-7 rounded-md bg-white mr-1"
              />
              <span>Like us on Facebook</span>
            </div>

            <div className="flex items-center cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                alt="Twitter"
                className="w-7 h-7 rounded-md mr-1"
              />
              <span>Like us on Twitter</span>
            </div>

            <div className="flex items-center cursor-pointer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/YouTube_play_button_square_%282013-2017%29.svg/2048px-YouTube_play_button_square_%282013-2017%29.svg.png"
                alt="Youtube"
                className="w-7 h-7 rounded-md mr-1"
              />
              <span>Like us on Youtube</span>
            </div>

            <div className="flex items-center cursor-pointer">
              <img
                src="https://mlzyv9upay49.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://disbudpar.okuselatankab.go.id/wp-content/uploads/sites/13/2019/05/Instagram-Icon.png"
                alt="Instagram"
                className="w-7 h-7 rounded-md bg-white mr-1"
              />
              <span>Like us on Instagram</span>
            </div>

            <div className="flex items-center cursor-pointer">
              <img
                src="https://play-lh.googleusercontent.com/Ui_-OW6UJI147ySDX9guWWDiCPSq1vtxoC-xG17BU2FpU0Fi6qkWwuLdpddmT9fqrA=w240-h480-rw"
                alt="Tiktok"
                className="w-7 h-7 rounded-md mr-1"
              />
              <span>Like us on Tiktok</span>
            </div>

            <div className="flex items-center cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/59/59191.png"
                alt="Call"
                className="w-7 h-7 rounded-md bg-white mr-1"
              />
              <span>Call us on xxxxxxx</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 h-0 mt-4 mb-28 w-full justify-center">
          <div className="w-full sm:w-[150px] cursor-pointer">
            <img
              src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge-128x128.png"
              alt="AppStore"
              className="-translate-y-[2px]"
            />
          </div>

          <div className="w-full sm:w-[150px] mr-2 cursor-pointer">
            <img
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png?hl=id"
              alt="PlayStore"
            />
          </div>

          <div className="w-5/12 sm:w-[55px] cursor-pointer">
            <img
              src="https://ppid.semarangkota.go.id/wp-content/uploads/2022/03/mui.png"
              alt="Halal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
