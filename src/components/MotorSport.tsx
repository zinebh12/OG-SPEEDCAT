import { motion } from "motion/react";
import type { MotorSportProps } from "../types/shoes";
const MotorSport = ({ shoe, onBack }: MotorSportProps) => {
  return (
    <motion.div
    id='shoe-details'
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="sticky top-0  z-50 border h-screen flex justify-between overflow-hidden"
      style={{
        background: `${shoe?.bgFrom}`,
      }}
    >
      <div className="">
        <img className="h-full object-cover" src={shoe?.image3} alt="" />
      </div>
      <div className="relative text-white  font-bold font-bebas text-center space-y-4 pt-6">
        <h1 className="uppercase [-webkit-text-stroke:1px_black] text-7xl">Speedcat</h1>
        <h1 className="text-nowrap uppercase text-5xl [-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-5xl [-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-5xl [-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-5xl [-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <h1 className="text-nowrap uppercase text-5xl [-webkit-text-stroke:1px_black] px-2">
          An icon of racing culture
        </h1>
        <img
          className=" h-full absolute -z-10 top-0 left-1/2 drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]  "
          src={shoe?.image1}
          alt=""
        />
        <img
          className="h-[50vh] absolute bottom-0 left-0 drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
          src={shoe?.image2}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default MotorSport;
