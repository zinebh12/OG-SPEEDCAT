import type { ShoeDetails } from "../types/shoes";
import { motion } from "motion/react";
import { useState, useRef } from "react";
const ShoeDetails = ({ shoe }: ShoeDetails) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const shoeRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isScrolling.current) return;
    const section = shoeRef.current?.querySelectorAll(`.shoe-section`);
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
    }, 1500);
  };

  return (
    <div
      ref={shoeRef}
      onWheel={handleScroll}
      id="shoe-details"
      className="h-full relative"
      style={{
        background: `${shoe?.bgFrom}`,
      }}
    >
      <div className="fixed left-8 top-1/2 flex flex-col gap-4 text-white text-left">
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
      <div className="fixed z-10 top-1/4 left-[30%] inset-x-0 ">
        <motion.img
          animate={{
            rotate: activeFeature === 0 ? -10 : 10,
            y: activeFeature === 0 ? 0 : -30,
            scale: activeFeature === 1 ? 1.1 : 1,
          }}
          transition={{ duration: 0.8 }}
          className="h-[60vh]  drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
          src={shoe?.image}
          alt=""
        />
      </div>
      <motion.div
        onViewportEnter={() => setActiveFeature(0)}
        className="shoe-section h-screen relative"
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
          className="text-white pt-4 uppercase text-7xl text-center font-bold font-bebas"
        >
          {shoe?.color} OG SPEEDCAT
        </motion.h1>
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            mass: 1,
          }}
          className="text-white uppercase text-7xl text-center font-bold font-bebas absolute bottom-0 w-full z-0"
        >
          {shoe?.description}
        </motion.h1>
      </motion.div>
      <motion.div
        onViewportEnter={() => setActiveFeature(1)}
        viewport={{ amount: 0.5 }}
        className="shoe-section h-screen relative"
      >
        <p className="absolute right-[-16%] top-1/2 -rotate-90 text-xs tracking-[0.4em] text-white/60">
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
          className="absolute right-10 top-[20%] text-[15rem] font-bebas font-bold text-white/10"
        >
          01
        </motion.h2>
        <div className="absolute text-white font-barlow left-[5%] top-[40%]">
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
            className="inline-block text-sm tracking-[0.3em] opacity-60"
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
            className="font-bold text-4xl"
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
            className="inline-block text-sm tracking-[0.3em] opacity-60"
          >
            Inspired by racing shoes
          </motion.span>
        </div>
      </motion.div>
      <motion.div
        onViewportEnter={() => setActiveFeature(2)}
        viewport={{ amount: 0.5 }}
        className="shoe-section h-screen relative"
      >
        <p className="absolute right-[-16%] top-1/2 -rotate-90 text-xs tracking-[0.4em] text-white/60">
          PUMA SPEEDCAT OG — MOTORSPORT INSPIRED
        </p>
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 1,
          }}
          className="absolute left-[5%] top-[20%] text-[15rem] font-bebas font-bold text-white/10"
        >
          02
        </motion.h2>
        <div className="absolute text-white font-barlow right-1/9 top-[40%] ">
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
            className="inline-block text-sm tracking-[0.3em] opacity-60"
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
            className="font-bold text-4xl"
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
            className="inline-block text-sm tracking-[0.3em] opacity-60"
          >
            A classic premium look
          </motion.span>
        </div>
      </motion.div>
      <motion.div
        onViewportEnter={() => setActiveFeature(3)}
        viewport={{ amount: 0.5 }}
        className="shoe-section h-screen relative"
      >
        <p className="absolute right-[-16%] top-1/2 -rotate-90 text-xs tracking-[0.4em] text-white/60">
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
          className="absolute right-10 top-[20%] text-[15rem] font-bebas font-bold text-white/10"
        >
          03
        </motion.h2>
        <div className="absolute text-white font-barlow left-[5%] top-[40%]">
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
            className="inline-block text-sm tracking-[0.3em] opacity-60"
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
            className="font-bold text-4xl"
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
            className="inline-block text-sm tracking-[0.3em] opacity-60"
          >
            Designed for grip and movement
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default ShoeDetails;
