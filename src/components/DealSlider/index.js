import React from "react";
import { Carousel } from "@material-tailwind/react";

const carouselItems = [
  {
    id: 1,
    image:
      "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=487/https://static-cdn-ph.pizzahut.co.id/uploads/temp/l1moblacktober_718x308-1696068740620.jpg",
    judul: "Promo Datang Tak Dijemput Pulang Tak Diantar",
    description:
      "Cobain hitamnya Black LI MO Pizza, pasti bikin ketagihan. Pesan sekarang!",
  },
  {
    id: 2,
    image:
      "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=487/https://static-cdn-ph.pizzahut.co.id/uploads/temp/genshin_718x308-1-1695003225914.jpg",
    judul: "Genshin Impact Bundle",
    description:
      "Main Genshin Impact Sambil Makan Pizza & lengkapi koleksimu dengan hadiah merchandise Stiker Koleksi/Kartu koleksi.",
  },
  {
    id: 3,
    image:
      "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=487/https://static-cdn-ph.pizzahut.co.id/uploads/temp/sustaingroup_718x308-1694405454830.jpg",
    judul: "Melts",
    description:
      "Cheesy, Crispy, Loaded. Pizza Baru topping Seru Langsung Melts and Go! Pesan sekarang.",
  },
  {
    id: 4,
    image:
      "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=487/https://static-cdn-ph.pizzahut.co.id/uploads/temp/pizza-hut-delivery-quartza-web-sliding-banner-718x308-1688354502149.jpg",
    judul: "QU4RTZA",
    description:
      "1 Pizza-nya, 4 Topping-nya, Banyak cuan-nya! Pesan sekarang, tersedia upgrade pinggiran Cruncheeze!",
  },
  {
    id: 5,
    image:
      "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=487/https://static-cdn-ph.pizzahut.co.id/uploads/temp/pizza-hut-delivery-l1mo-cruncheeze-6-topping-sliding-banner-718x308-1680274022358.jpg",
    judul: "LI MO Cruncheeze 6 Topping",
    description:
      "LI MO Pizza dengan pinggiran keju krezzzzz! Bebas pilih 6 Topping",
  },
  {
    id: 6,
    image:
      "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=487/https://static-cdn-ph.pizzahut.co.id/uploads/temp/slidingphddbsignaturregb4tax-1-1680589254909.jpg",
    judul: "Double Box Regular",
    description:
      "Selalu Lebih Hemat. Bisa pilih 2 pizza dengan topping kesukaanmu. Beli sekarang!",
  },
];

export default function DealSlider() {
  return (
    <div className="mt-4 p-2 lg:w-6/12 lg:mx-auto">
      <Carousel
        prevArrow={false}
        nextArrow={false}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-[#DA291C]" : "w-4 bg-[#827C7B]"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {carouselItems.map((props) => (
          <div key={props.id}>
            <img
              src={props.image}
              alt={props.judul}
              className="h-full w-full object-cover"
            />
            <div className="w-full">
              <p className="font-bold text-base my-3">{props.judul}</p>
              <p className="mb-14 text-sm">{props.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
