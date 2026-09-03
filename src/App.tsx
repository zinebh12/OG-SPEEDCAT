import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import shoes from "./data";
import Colorway from "./components/Colorway";
import MotorSport from "./components/MotorSport";
import ShoeDetails from "./components/ShoeDetails";

function App() {
  const [currentShoe, setCurrentShoe] = useState<number | null>(null);
  const [selectedShoe, setSelectedShoe] = useState<number | null>(null);
  const [shoeDescription, setShoeDescription] = useState(false);

  const current = currentShoe !== null ? shoes[currentShoe] : shoes[0];

  const selectedScrollPosition = useRef<number | null>(null);
  const selectedShoeDetailsPosition = useRef<number | null>(null);

  const { scrollY } = useScroll();

  // Runs when a user clicks a color
  const handleSelectShoe = (index: number) => {
    selectedScrollPosition.current = window.scrollY;

    setCurrentShoe(index);
    setSelectedShoe(index);
  };

  // Runs when user opens ShoeDetails
  const handleOpenShoeDetails = () => {
    selectedShoeDetailsPosition.current = window.scrollY;

    setShoeDescription(true);
  };

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
      setShoeDescription(false);
      selectedScrollPosition.current = null;
    }
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (
      selectedShoeDetailsPosition.current !== null &&
      previous !== undefined &&
      latest < previous &&
      latest <= selectedShoeDetailsPosition.current &&
      selectedShoe !== null
    ) {
      setShoeDescription(false);
      selectedShoeDetailsPosition.current = null;
    }
  });

  return (
    <div>
      <section>
        <motion.div
          animate={{
            background: `radial-gradient(circle, ${current.bgFrom}, ${current.bgTo})`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-white h-screen flex flex-col justify-between items-center"
        >
          <Nav />

          <Header
            current={current}
            setCurrentShoe={setCurrentShoe}
            currentShoe={currentShoe}
          />
        </motion.div>
      </section>

      <section>
        <Colorway onSelectShoe={handleSelectShoe} />

        {selectedShoe !== null && (
          <MotorSport
            shoe={shoes[selectedShoe]}
            setShoeDescription={handleOpenShoeDetails}
            shoeDescription={shoeDescription}
          />
        )}
      </section>

      {selectedShoe !== null && shoeDescription && (
        <ShoeDetails
          shoe={shoes[selectedShoe]}
          setShoeDescription={setShoeDescription}
        />
      )}
    </div>
  );
}

export default App;