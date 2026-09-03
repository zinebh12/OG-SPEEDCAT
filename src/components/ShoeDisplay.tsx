import { motion } from "motion/react";
import shoes from "./../data";
import type { ShoeDisplayProps } from "../types/shoes";

const ShoeDisplay = ({
  currentShoe,
  setCurrentShoe,
  current,
}: ShoeDisplayProps) => {
  return (
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
        className="max-h-[65vh] md:max-h-[50vh] lg:max-h-[65vh] mt-20 mr-30 object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
      />
    </motion.div>
  );
};

export default ShoeDisplay;
