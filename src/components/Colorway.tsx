import { motion, useAnimationControls } from "motion/react";
import { useRef } from "react";
import shoes from "../data";
const Colorway = () => {
  const controls = useAnimationControls();
  const isAnimating = useRef(false);

  const handleEnter = async () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    await controls.start((index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    }));

    isAnimating.current = false;
  };

  const handleLeave = async () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    await controls.start((index) => ({
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.5,

        // Reverse order
        delay: (shoes.length - 1 - index) * 0.2,

        ease: "easeIn",
      },
    }));

    isAnimating.current = false;
  };

  return (
    <motion.div
      className="w-full h-screen flex flex-col md:flex-row"
      onViewportEnter={handleEnter}
      onViewportLeave={handleLeave}
      viewport={{ amount: 0.3 }}
    >
      {shoes.map((shoe, index) => (
        <motion.button
          key={index}
          custom={index}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={controls}
          className="w-full h-full cursor-pointer"
        >
          <div
            className="group w-full h-full relative flex items-center"
            style={{
              background: `radial-gradient(circle, ${shoe.bgFrom}, ${shoe.bgTo})`,
            }}
          >
            <h2 className="text-white text-5xl font-bebas font-extrabold px-4 transition-transform duration-300 group-hover:-translate-y-2 ">
              {shoe.color}
            </h2>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default Colorway;
