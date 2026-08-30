import { motion } from "motion/react";
type MotorSportProps = {
  onBack: () => void;
};
const MotorSport = ({ onBack }: MotorSportProps) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute inset-0 z-50 bg-amber-300"
    >
      MotorSport
      <button onClick={onBack}  className="border cursor-pointer">
        back
      </button>
    </motion.div>
  );
};

export default MotorSport;
