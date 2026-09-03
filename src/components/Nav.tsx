import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import puma from "./../assets/puma.png";
import search from "./../assets/search.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4 w-full">
      <img className="max-h-[5vh]" src={puma} alt="" />
      <button className="lg:hidden">
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className=" z-50 lg:hidden fixed inset-0 h-screen bg-black/50 backdrop-blur-md flex flex-col justify-center items-center"
          >
            <button
              className="lg:hidden absolute top-6 right-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-white text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </button>
            <ul
              className="space-y-10 text-4xl"
              // className="md:hidden gap-7 p-4 px-10 absolute inset-0 h-screen bg-black/50 backdrop-blur-md flex flex-col justify-center items-center"
            >
              <motion.li
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="cursor-pointer"
              >
                Home
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="cursor-pointer"
              >
                Shop
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="cursor-pointer"
              >
                Collection
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="cursor-pointer"
              >
                New Releases
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="cursor-pointer"
              >
                Blog
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="cursor-pointer"
              >
                About Us
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <ul className="hidden lg:flex gap-7 p-4 px-10  rounded-full">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Shop</li>
        <li className="cursor-pointer">Collection</li>
        <li className="cursor-pointer">New Releases</li>
        <li className="cursor-pointer">Blog</li>
        <li className="cursor-pointer">About Us</li>
      </ul>
      <img className="hidden lg:block max-h-[4vh] mb-2" src={search} alt="" />
    </nav>
  );
};

export default Nav;
