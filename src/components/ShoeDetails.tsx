import type { ShoeDetails } from "../types/shoes";
import { motion } from "motion/react";
import { useState, useRef } from "react";
import FindYourSpeed from "./FindYourSpeed";
const ShoeDetails = ({ shoe, setShoeDescription }: ShoeDetails) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const shoeRef = useRef<HTMLDivElement>(null);
  const [isShoeVisible, setIsShoeVisible] = useState(true);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isScrolling.current) return;
    const section = shoeRef.current?.querySelectorAll(`.shoe-section`);
    if (!section) return;
    const currentSection = Array.from(section);
    const currentIndex = currentSection.reduce(
      (closest, sec, index) => {
        const rect = sec.getBoundingClientRect();

        // const distance = rect.top > 0 ? rect.top : Math.abs(rect.bottom - window.innerHeight);

        const distance = Math.abs(rect.top);

        if (distance < closest.distance) {
          return { index, distance };
        }

        return closest;
      },
      { index: 0, distance: Infinity },
    ).index;
    if (currentIndex === -1) return;
    let nextIndex = currentIndex;
    if (e.deltaY > 0) {
      nextIndex = Math.min(currentIndex + 1, currentSection.length - 1);
    }
    if (e.deltaY < 0) {
      nextIndex = Math.max(currentIndex - 1, 0);
    }
    if (nextIndex === currentIndex) return;
    isScrolling.current = true;
    currentSection[nextIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (Math.abs(deltaY) < 50) return;

    if (isScrolling.current) return;

    const section = shoeRef.current?.querySelectorAll(".shoe-section");
    if (!section) return;

    const currentSection = Array.from(section);

    const currentIndex = currentSection.reduce(
      (closest, sec, index) => {
        const rect = sec.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < closest.distance) {
          return { index, distance };
        }

        return closest;
      },
      { index: 0, distance: Infinity },
    ).index;

    let nextIndex = currentIndex;

    if (deltaY > 0) {
      nextIndex = Math.min(currentIndex + 1, currentSection.length - 1);
    }

    if (deltaY < 0) {
      nextIndex = Math.max(currentIndex - 1, 0);
    }

    if (nextIndex === currentIndex) return;

    isScrolling.current = true;

    currentSection[nextIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  return (
    <div
      ref={shoeRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      id="shoe-details"
      className="h-full relative overflow-x-hidden"
      style={{
        background: `${shoe?.bgFrom}`,
      }}
    >
      {/* Feature navigation */}
      {isShoeVisible && (
        <div className="hidden fixed left-8 top-1/2 xl:flex flex-col gap-4 text-white text-left">
          <span
            className={
              activeFeature === 0
                ? "text-white text-xs font-bold font-barlow"
                : "opacity-40 text-xs font-bold font-barlow"
            }
          >
            OG
          </span>

          <span className={activeFeature === 1 ? "text-white" : "opacity-40"}>
            01
          </span>

          <span className={activeFeature === 2 ? "text-white" : "opacity-40"}>
            02
          </span>

          <span className={activeFeature === 3 ? "text-white" : "opacity-40"}>
            03
          </span>
        </div>
      )}

      {/* Fixed shoe */}
      <motion.div
        className={`hidden xl:block xl:fixed z-10 top-1/4 left-[35%] inset-x-0 ${
          isShoeVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
        animate={{
          opacity: isShoeVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          animate={{
            rotate: activeFeature === 0 ? -10 : 10,
            y: activeFeature === 0 ? 0 : -30,
            scale: activeFeature === 1 ? 1.1 : 1,
          }}
          transition={{ duration: 0.8 }}
          className="object-contain cursor-pointer h-[40vh] xl:h-[60vh] drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
          src={shoe?.image}
          alt=""
          onClick={() => {
            setShoeDescription(false);
          }}
        />
      </motion.div>

      {/* OG */}
      <motion.div
        onViewportEnter={() => {
          setActiveFeature(0);
          setIsShoeVisible(true);
        }}
        viewport={{ amount: 0.9 }}
        className="shoe-section h-screen relative flex flex-col justify-between items-center"
      >
        <motion.h1
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            mass: 1,
          }}
          className="h-fit text-white pt-20 xl:pt-4 uppercase text-4xl md:text-7xl text-center font-bold font-bebas"
        >
          {shoe?.color} OG SPEEDCAT
        </motion.h1>
        <div className="xl:hidden flex justify-center items-center h-fit md:h-full xl:h-fit w-full">
          <motion.img
            animate={{
              rotate: activeFeature === 0 ? -10 : 10,
              y: activeFeature === 0 ? 0 : -30,
              scale: activeFeature === 1 ? 1.1 : 1,
            }}
            transition={{ duration: 0.8 }}
            className="object-contain h-[40vh]"
            src={shoe?.image}
            alt=""
          />
        </div>
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            mass: 1,
          }}
          className="h-fit text-white uppercase mb-30 md:mb-0 text-4xl md:text-7xl text-center font-bold font-bebas md:absolute md:bottom-0 w-full z-0"
        >
          {shoe?.description}
        </motion.h1>
      </motion.div>

      {/* Feature 01 */}
      <motion.div
        onViewportEnter={() => {
          setActiveFeature(1);
          setIsShoeVisible(true);
        }}
        viewport={{ amount: 0.9 }}
        className="shoe-section h-screen w-full relative flex flex-col justify-evenly md:justify-center items-center md:gap-20"
      >
        <p className="absolute right-[-55%] md:right-[-25%] top-1/2 xl:right-[-16%] -rotate-90 text-xs tracking-[0.4em] text-white/60">
          PUMA SPEEDCAT OG — MOTORSPORT INSPIRED
        </p>

        <motion.h2
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 1,
          }}
          className="absolute right-0 xl:right-10 top-[20%] text-[30rem] xl:text-[15rem] font-bebas font-bold text-white/10"
        >
          01
        </motion.h2>
        <div className="xl:hidden flex justify-center items-center h-fit">
          <motion.img
            animate={{
              rotate: activeFeature === 0 ? -10 : 10,
              y: activeFeature === 0 ? 0 : -30,
              scale: activeFeature === 1 ? 1.1 : 1,
            }}
            transition={{ duration: 0.8 }}
            className="object-contain h-[40vh]"
            src={shoe?.image}
            alt=""
          />
        </div>
        <div className="xl:absolute w-full h-fit text-white md:text-center xl:text-start font-barlow px-4 xl:left-[5%] xl:top-[40%]">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
            }}
            className="inline-block text-sm tracking-[0.3em] opacity-60 md:text-4xl xl:text-sm"
          >
            FEATURE 01
          </motion.span>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
              delay: 0.3,
            }}
            className="font-bold text-4xl md:text-7xl xl:text-4xl"
          >
            LOW PROFILE
          </motion.p>

          <motion.span
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
              delay: 0.6,
            }}
            className="inline-block text-sm tracking-[0.3em] opacity-60 md:text-2xl xl:text-sm"
          >
            Inspired by racing shoes
          </motion.span>
        </div>
      </motion.div>

      {/* Feature 02 */}
      <motion.div
        onViewportEnter={() => {
          setActiveFeature(2);
          setIsShoeVisible(true);
        }}
        viewport={{ amount: 0.9 }}
        className="shoe-section h-screen w-full relative flex flex-col justify-evenly md:justify-center items-center md:gap-20"
      >
        <p className="absolute right-[-55%] md:right-[-25%] top-1/2 xl:right-[-16%] -rotate-90 text-xs tracking-[0.4em] text-white/60">
          PUMA SPEEDCAT OG — MOTORSPORT INSPIRED
        </p>

        <motion.h2
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 1,
          }}
          className="absolute right-0 xl:left-[5%] top-[20%] text-[30rem] xl:text-[15rem] font-bebas font-bold text-white/10"
        >
          02
        </motion.h2>
        <div className="xl:hidden flex justify-center items-center h-fit">
          <motion.img
            animate={{
              rotate: activeFeature === 0 ? -10 : 10,
              y: activeFeature === 0 ? 0 : -30,
              scale: activeFeature === 1 ? 1.1 : 1,
            }}
            transition={{ duration: 0.8 }}
            className="object-contain h-[40vh]"
            src={shoe?.image}
            alt=""
          />
        </div>
        {/* <div className="absolute text-white font-barlow bottom-1/8 left-5 md:left-auto md:right-1/9 md:top-[40%]"> */}
        <div className="xl:absolute w-full md:w-fit h-fit text-white md:text-center xl:text-start font-barlow px-4 md:p-0 md:right-1/9 md:top-[40%]">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
            }}
            className="inline-block text-sm tracking-[0.3em] opacity-60 md:text-4xl xl:text-sm"
          >
            FEATURE 02
          </motion.span>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
              delay: 0.3,
            }}
            className="font-bold text-4xl md:text-7xl xl:text-4xl"
          >
            SUEDE UPPER
          </motion.p>

          <motion.span
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
              delay: 0.6,
            }}
            className="inline-block text-sm tracking-[0.3em] opacity-60 md:text-2xl xl:text-sm"
          >
            A classic premium Look
          </motion.span>
        </div>
      </motion.div>

      {/* Feature 03 */}
      <motion.div
        onViewportEnter={() => {
          setActiveFeature(3);
          setIsShoeVisible(true);
        }}
        viewport={{ amount: 0.9 }}
        className="shoe-section h-screen w-full relative flex flex-col justify-evenly md:justify-center items-center md:gap-20"
      >
        <p className="absolute right-[-55%] top-1/2 md:right-[-25%] xl:right-[-16%] -rotate-90 text-xs tracking-[0.4em] text-white/60">
          PUMA SPEEDCAT OG — MOTORSPORT INSPIRED
        </p>

        <motion.h2
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 1,
          }}
          className="absolute right-0 xl:right-10 top-[20%] text-[30rem] xl:text-[15rem] font-bebas font-bold text-white/10"
        >
          03
        </motion.h2>
        <div className="xl:hidden flex justify-center items-center h-fit">
          <motion.img
            animate={{
              rotate: activeFeature === 0 ? -10 : 10,
              y: activeFeature === 0 ? 0 : -30,
              scale: activeFeature === 1 ? 1.1 : 1,
            }}
            transition={{ duration: 0.8 }}
            className="object-contain h-[40vh]"
            src={shoe?.image}
            alt=""
          />
        </div>
        <div className="xl:absolute w-full h-fit text-white md:text-center xl:text-start font-barlow px-4 xl:left-[5%] xl:top-[40%]">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
            }}
            className="inline-block text-sm tracking-[0.3em] opacity-60 md:text-4xl xl:text-sm"
          >
            FEATURE 03
          </motion.span>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
              delay: 0.3,
            }}
            className="font-bold text-4xl md:text-7xl xl:text-4xl"
          >
            RUBBER OUTSOLE
          </motion.p>

          <motion.span
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
              delay: 0.6,
            }}
            className="inline-block text-sm tracking-[0.3em] opacity-60 md:text-2xl xl:text-sm"
          >
            Designed for grip and movement
          </motion.span>
        </div>
      </motion.div>

      {/* Find Your Speed */}
      <motion.div
        onViewportEnter={() => setIsShoeVisible(false)}
        viewport={{ amount: 0.3 }}
        className="shoe-section h-full xl:h-screen relative"
      >
        <FindYourSpeed />
      </motion.div>
    </div>
  );
};

export default ShoeDetails;
