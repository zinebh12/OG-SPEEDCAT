import { useState } from "react";
import { motion } from "motion/react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import shoes from "./data";

function App() {
  const [currentShoe, setCurrentShoe] = useState(0);

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
        setCurrentShoe={setCurrentShoe}
        currentShoe={currentShoe}
      />
    </motion.div>
  );
}

export default App;
