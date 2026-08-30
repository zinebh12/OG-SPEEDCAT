import { motion } from "motion/react";
import redSpeedcat from "./assets/red-speedcat.png";
import graySpeedcat from "./assets/gray-speedcat.png";
import navySpeedcat from "./assets/navy-speedcat.png";
import greenSpeedcat from "./assets/green-speedcat.png";
import Nav from "./components/Nav";
import { useState } from "react";
import Header from "./components/Header";
function App() {
  const [currentShoe, setCurrentShoe] = useState(0);

  const shoes = [
    {
      image: redSpeedcat,
      bgFrom: "#F04444",
      bgTo: "#FFB36B",
    },
    {
      image: navySpeedcat,
      bgFrom: "#172554",
      bgTo: "#38BDF8",
    },
    {
      image: graySpeedcat,
      bgFrom: "#525252",
      bgTo: "#E5E5E5",
    },
    {
      image: greenSpeedcat,
      bgFrom: "#15803D",
      bgTo: "#BEF264",
    },
  ];
  const current = shoes[currentShoe];
  return (
    <motion.div
      animate={{
        background: `radial-gradient(circle, ${current.bgFrom}, ${current.bgTo})`,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="text-white h-screen md:full flex flex-col justify-between items-center"
    >
      <Nav />
      <Header
        current={current}
        shoes={shoes}
        setCurrentShoe={setCurrentShoe}
        currentShoe={currentShoe}
      />
    </motion.div>
  );
}

export default App;
