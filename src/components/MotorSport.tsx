import { motion } from "motion/react";
import type { MotorSportProps } from "../types/shoes";
const MotorSport = ({
  shoe,
  setShoeDescription,
  shoeDescription,
}: MotorSportProps) => {
  return (
    <motion.div
      id="motorsport"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="sticky top-0 z-50 h-screen flex justify-between overflow-hidden"
      style={{
        background: `${shoe?.bgFrom}`,
      }}
    >
      <div className="">
        <img
          className="h-full object-cover absolute top-0 w-full xl:w-1/2"
          src={shoe?.image3}
          alt=""
        />
      </div>
      <div className="relative text-white font-bold font-bebas text-center w-full space-y-4 pt-6">
        <h1 className="uppercase [-webkit-text-stroke:1px_black] text-7xl">
          Speedcat
        </h1>
        <h1 className="text-nowrap uppercase text-2xl md:text-5xl [-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-2xl md:text-5xl [-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-2xl md:text-5xl [-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-2xl md:text-5xl [-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-2xl md:text-5xl [-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <img
          className="hidden xl:block h-full absolute -z-10 top-0 xl:left-[60%] drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
          src={shoe?.image1}
          alt=""
        />
        <button
          className="cursor-pointer"
          onClick={() => {
            setShoeDescription(!shoeDescription);

            setTimeout(() => {
              document.getElementById("shoe-details")?.scrollIntoView({
                behavior: "smooth",
              });
            }, 50);
          }}
        >
          <img
            className="h-[50vh] absolute -bottom-4 inset-x-0 md:left-[15%] lg:left-[20%] xl:left-[35%] drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
            src={shoe?.image2}
            alt=""
          />
          <span className="absolute z-20 bottom-6 left-auto -translate-x-1/2 p-2 md:px-5 md:py-2 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm text-white font-barlow text-xs tracking-[0.3em] uppercase opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
            Click to explore
          </span>
          <span className="absolute z-20 bottom-1 left-1/2 -translate-x-1/2 text-white text-lg animate-bounce">
            ↓
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default MotorSport;
