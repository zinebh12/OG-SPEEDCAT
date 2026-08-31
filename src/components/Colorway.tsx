import { motion, useAnimationControls } from "motion/react";
import { useRef } from "react";
import shoes from "../data";
import type { ColorwayProps } from "../types/shoes";
const Colorway = ({
    onSelectShoe,
}: ColorwayProps) => {
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

  // const handleLeave = async () => {
  //   if (isAnimating.current) return;

  //   isAnimating.current = true;

  //   await controls.start((index) => ({
  //     opacity: 0,
  //     y: 100,
  //     transition: {
  //       duration: 0.5,

  //       // Reverse order
  //       delay: (shoes.length - 1 - index) * 0.2,

  //       ease: "easeIn",
  //     },
  //   }));

  //   isAnimating.current = false;
  // };

  return (
    <motion.div
      className="w-full h-screen flex flex-col md:flex-row sticky top-0"
      onViewportEnter={() => {
        handleEnter();

      }}
      //onViewportLeave={handleLeave}
      viewport={{ amount: 0.3 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="absolute text-8xl font-bebas font-bold top-10 inset-0 text-center uppercase [-webkit-text-stroke:1px_black] text-transparent "
      >
        Select a color
      </motion.h1>
      {shoes.map((shoe, index) => (
        <motion.button
          key={index}
          custom={index}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={controls}
          className="w-full h-full cursor-pointer relative group"
          onClick={() => {
             onSelectShoe(index);
            setTimeout(() => {
              document.getElementById("shoe-details")?.scrollIntoView({
                behavior: "smooth",
              });
            }, 50);
          }}
        >
          <img
            src={shoe.image}
            alt=""
            className="absolute md:h-1/2 md:top-20 h-[20vh] top-5 right-4 z-10 md:z-0 group-hover:-translate-y-10 transition-transform duration-300 "
          />
          <div
            className=" w-full h-full relative flex items-center md:[clip-path:polygon(0%_40%,100%_20%,100%_100%,0%_100%)] "
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
