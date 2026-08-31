import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import shoes from "./data";
import Colorway from "./components/Colorway";
import MotorSport from "./components/MotorSport";

function App() {
  const [currentShoe, setCurrentShoe] = useState<number | null>(null);
  const [selectedShoe, setSelectedShoe] = useState<number | null>(null);
  const current = currentShoe !== null ? shoes[currentShoe] : shoes[0];

  const selectedScrollPosition = useRef<number | null>(null);

  const { scrollY } = useScroll();

  // NEW: this runs when a user clicks a color
  const handleSelectShoe = (index: number) => {
    selectedScrollPosition.current = window.scrollY;

    setCurrentShoe(index);
    setSelectedShoe(index);
  };

  // NEW: detects when user scrolls back upward
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (
      selectedScrollPosition.current !== null &&
      previous !== undefined &&
      latest < previous &&
      latest <= selectedScrollPosition.current &&
      selectedShoe !== null
    ) {
      setSelectedShoe(null);
    }
  });

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
      <section className="">
        <Colorway onSelectShoe={handleSelectShoe} />
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
