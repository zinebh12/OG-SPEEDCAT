import { motion } from "motion/react";
const Header = ({ current, shoes, setCurrentShoe, currentShoe }) => {
  return (
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
      <div className=" font-barlow z-10 md:absolute md:right-0 md:bottom-5 space-y-1 p-4 h-fit">
        <h2 className="font-barlow font-bold text-sm md:text-xl">Speedcat</h2>
        <p className="text-xs md:text-sm tracking-widest max-w-[70vh]">
          The Puma Speedcat is a classic sneaker originally inspired by
          motorsports, particularly Formula 1 racing, and designed for both
          performance and style.
        </p>
      </div>
    </div>
  );
};
export default Header;
