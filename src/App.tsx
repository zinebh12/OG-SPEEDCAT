import { motion } from "motion/react";
import redSpeedcat from "./assets/red-speedcat.png";
import graySpeedcat from "./assets/gray-speedcat.png";
import navySpeedcat from "./assets/navy-speedcat.png";
import greenSpeedcat from "./assets/green-speedcat.png";
import puma from "./assets/puma.png";
import search from "./assets/search.svg";
import { useState } from "react";
function App() {
  const [currentShoe, setCurrentShoe] = useState(0);
  const shoes = [
    {
      image: redSpeedcat,
      bgFrom: "#F04444",
      bgTo: "#FFB36B",
    },
    {
      image: navySpeedcat,
      bgFrom: "#172554",
      bgTo: "#38BDF8",
    },
    {
      image: graySpeedcat,
      bgFrom: "#525252",
      bgTo: "#E5E5E5",
    },
    {
      image: greenSpeedcat,
      bgFrom: "#15803D",
      bgTo: "#BEF264",
    },
  ];
  const current = shoes[currentShoe];
  return (
    <motion.div
      animate={{
        background: `radial-gradient(circle, ${current.bgFrom}, ${current.bgTo})`,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="text-white h-screen md:full flex flex-col justify-between items-center"
    >
      <nav className="flex justify-between items-center p-4 w-full">
        <img className="max-h-[5vh]" src={puma} alt="" />
        <ul className="hidden md:flex gap-7 p-4 px-10  rounded-full">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Collection</li>
          <li className="cursor-pointer">New Releases</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">About Us</li>
        </ul>
        <img
          className="hidden md:block max-h-[4vh] mb-2"
          src={search}
          alt=""
        />
      </nav>

      <div className="h-full w-full flex flex-col justify-between items-end ">
        <div className="font-bebas z-0 mt-4 relative h-full w-full overflow-hidden flex flex-col md:flex-row justify-center items-start gap-0">
          <div className=" h-fit absolute md:h-full md:w-full md:bottom-0 bottom-1/2 p-4 z-10 md:z-auto">
            <h1 className="md:absolute text-6xl md:text-9xl font-bold md:top-5 md:left-50 md:-z-1">
              Fuel Your
            </h1>
            <div className="absolute text-6xl md:text-9xl font-bold md:bottom-50 md:right-50 z-10 flex gap-4">
              <h1 className="[-webkit-text-stroke:1px_white] text-transparent">
                Every
              </h1>
              <h1>move</h1>
            </div>
          </div>
          <motion.div
            key={currentShoe}
            initial={{ x: -1000, rotate: -10 }}
            animate={{
              x: [-1000, 0, 0, 1000],
              rotate: [-10, 0, 0, 10],
            }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.75, 1],
              ease: "easeInOut",
            }}
            onAnimationComplete={() => {
              setCurrentShoe((prev) => (prev + 1) % shoes.length);
            }}
          >
            <img
              src={current.image}
              alt=""
              className="max-h-[65vh] mt-20 mr-30 object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>
        <div className="font-barlow z-10 md:absolute md:right-0 md:bottom-5 space-y-1 p-4 h-fit">
          <h2 className="font-barlow font-bold text-sm md:text-xl">Speedcat</h2>
          <p className="text-xs md:text-sm tracking-widest max-w-[70vh]">
            The Puma Speedcat is a classic sneaker originally inspired by
            motorsports, particularly Formula 1 racing, and designed for both
            performance and style.
          </p>
          {/* <button className="bg-peachy py-2 px-6 rounded-full flex items-center justify-between gap-1">
            <span>Get Started </span>
            <img className="max-h-[3vh]" src={arrow} alt="" />
          </button> */}
        </div>
      </div>
    </motion.div>
  );
}

export default App;
