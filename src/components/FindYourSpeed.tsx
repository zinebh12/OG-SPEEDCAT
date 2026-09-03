import { motion } from "motion/react";

const textVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

const FindYourSpeed = () => {
  return (
    <footer className="relative h-full lg:h-screen bg-black text-white px-8 py-10 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto h-full flex flex-col justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: false }}
      >
        {/* Top Bar */}
        <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row border-b border-white/10 pb-5">
          <div className="overflow-y-hidden">
            <motion.p
              variants={textVariants}
              custom={0.5}
              className="font-bebas text-2xl tracking-wide"
            >
              PUMA SPEEDCAT
            </motion.p>
          </div>

          <div className="overflow-y-hidden">
            <motion.p
              variants={textVariants}
              custom={0.5}
              className="font-barlow text-xs tracking-[0.3em] text-white/40 uppercase"
            >
              Motorsport Heritage
            </motion.p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-1">
          {/* Left */}
          <div>
            <div className="overflow-y-hidden">
              <motion.p
                variants={textVariants}
                custom={0.5}
                className="font-barlow text-xs tracking-[0.4em] text-white/40 uppercase"
              >
                FIND YOUR SPEED
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                variants={textVariants}
                custom={0}
                className="font-bebas text-8xl md:text-[7rem] uppercase leading-[0.8] mt-4"
              >
                RUN
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                variants={textVariants}
                custom={0.15}
                className="font-bebas text-8xl md:text-[7rem] uppercase leading-[0.8] mt-4"
              >
                YOUR
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                variants={textVariants}
                custom={0.3}
                className="font-bebas text-8xl md:text-[7rem] uppercase leading-[0.8] mt-4"
              >
                OWN
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                variants={textVariants}
                custom={0.45}
                className="font-bebas text-8xl md:text-[7rem] uppercase leading-[0.8] mt-4"
              >
                LINE.
              </motion.h2>
            </div>

            <p className="font-barlow text-white/50 text-sm max-w-md mt-8 leading-relaxed">
              Born on the racetrack. Reimagined for the streets. The Speedcat
              carries decades of motorsport heritage into a new generation.
            </p>

            <button className="mt-8 border border-white/30 px-8 py-3 rounded-full font-barlow text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition duration-300">
              Explore Speedcat
            </button>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            {/* Newsletter */}
            <div className="border-b border-white/10 pb-8">
              <div className="overflow-y-hidden">
                <motion.p
                  variants={textVariants}
                  custom={0.45}
                  className="font-barlow text-xs tracking-[0.3em] text-white/40 uppercase"
                >
                  Stay In The Fast Lane
                </motion.p>
              </div>

              <div className="overflow-y-hidden">
                <motion.h3
                  variants={textVariants}
                  custom={0.5}
                  className="font-bebas text-5xl mt-3"
                >
                  GET THE LATEST
                </motion.h3>
              </div>
              <div className="flex mt-6 max-w-md">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  className="flex-1 bg-white/5 border border-white/10 rounded-l-full px-5 py-3 text-xs font-barlow tracking-wider text-white placeholder:text-white/30 outline-none focus:border-white/40"
                />

                <button className="cursor-pointer bg-white text-black px-6 rounded-r-full font-barlow text-xs tracking-wider hover:bg-white/80 transition">
                  JOIN
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-12 mt-10">
              <div className="flex flex-col gap-4">
                <span className="font-barlow text-xs tracking-[0.3em] text-white/30 uppercase">
                  Explore
                </span>

                <a
                  href="#"
                  className="font-barlow text-sm hover:text-white/50 transition"
                >
                  Speedcat OG
                </a>

                <a
                  href="#"
                  className="font-barlow text-sm hover:text-white/50 transition"
                >
                  Collections
                </a>

                <a
                  href="#"
                  className="font-barlow text-sm hover:text-white/50 transition"
                >
                  Features
                </a>

                <a
                  href="#"
                  className="font-barlow text-sm hover:text-white/50 transition"
                >
                  Find Your Speed
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-barlow text-xs tracking-[0.3em] text-white/30 uppercase">
                  Follow
                </span>

                <a
                  href="#"
                  className="font-barlow text-sm hover:text-white/50 transition"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  className="font-barlow text-sm hover:text-white/50 transition"
                >
                  TikTok
                </a>

                <a
                  href="#"
                  className="font-barlow text-sm hover:text-white/50 transition"
                >
                  YouTube
                </a>

                <a
                  href="#"
                  className="font-barlow text-sm hover:text-white/50 transition"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Huge Background Text */}
        <div className="absolute bottom-[-2rem] left-0 w-full pointer-events-none select-none">
          <h1 className="font-bebas text-[18vw] leading-none text-white/[0.035] text-center whitespace-nowrap">
            SPEEDCAT
          </h1>
        </div>

        {/* Bottom */}
        <div className="relative z-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-barlow text-[10px] tracking-[0.3em] text-white/30 uppercase">
            © 2026 Speedcat Concept
          </span>

          <div className="flex gap-8">
            <a
              href="#"
              className="font-barlow text-[10px] tracking-[0.3em] text-white/30 uppercase hover:text-white transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="font-barlow text-[10px] tracking-[0.3em] text-white/30 uppercase hover:text-white transition"
            >
              Terms
            </a>

            <a
              href="#"
              className="font-barlow text-[10px] tracking-[0.3em] text-white/30 uppercase hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default FindYourSpeed;
