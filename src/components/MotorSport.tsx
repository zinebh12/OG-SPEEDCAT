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
          className="h-full object-cover absolute top-0 md:w-1/2"
          src={shoe?.image3}
          alt=""
        />
      </div>
      <div className="relative text-white font-bold font-bebas text-center w-full space-y-4 pt-6">
        <h1 className="uppercase md:[-webkit-text-stroke:1px_black] text-7xl">
          Speedcat
        </h1>
        <h1 className="text-nowrap uppercase text-2xl md:text-5xl md:[-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-2xl md:text-5xl md:[-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-2xl md:text-5xl md:[-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-2xl md:text-5xl md:[-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-2xl md:text-5xl md:[-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <img
          className="hidden md:block h-full absolute -z-10 top-0 md:left-[60%] drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
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
            className="h-[50vh] absolute -bottom-4 inset-x-0 md:left-[35%] drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
            src={shoe?.image2}
            alt=""
          />
        </button>
      </div>
    </motion.div>
  );
};

export default MotorSport;
