import { useState } from "react";
import { motion } from "motion/react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import shoes from "./data";
import Colorway from "./components/Colorway";
import MotorSport from "./components/MotorSport";

function App() {
  const [currentShoe, setCurrentShoe] = useState<number | null>(null);
  // const [hasSelectedShoe, setHasSelectedShoe] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState<number | null>(null);
  const current = currentShoe !== null ? shoes[currentShoe] : shoes[0];

  return (
    <div className="">
      <section className="">
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
      </section>
      <section className="relative">
        <Colorway
          setCurrentShoe={setCurrentShoe}
          setSelectedShoe={setSelectedShoe}
        />
        {selectedShoe !== null && (
          <MotorSport
            shoe={shoes[selectedShoe]}
            onBack={() => setSelectedShoe(null)}
          />
        )}
      </section>
    </div>
  );
}

export default App;
