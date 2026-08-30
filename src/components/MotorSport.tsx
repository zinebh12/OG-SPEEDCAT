import { motion } from "motion/react";
import type { MotorSportProps } from "../types/shoes";
const MotorSport = ({ shoe, onBack }: MotorSportProps) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute inset-0 z-50 border"
      style={{
        background: `${shoe?.bgFrom}`,
      }}
    >
      <h1>{shoe?.color}</h1>
      <p>{shoe?.description}</p>
      <button onClick={onBack} className="border cursor-pointer">
        back
      </button>
    </motion.div>
  );
};

export default MotorSport;
