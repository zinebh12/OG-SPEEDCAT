import { useState } from "react";
import { motion } from "motion/react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import shoes from "./data";
import Colorway from "./components/Colorway";

function App() {
  const [currentShoe, setCurrentShoe] = useState(0);
  const current = shoes[currentShoe];

  return (
    <main className="snap-y snap-mandatory">
      <section className="h-screen snap-start">
        <motion.div
          animate={{
            background: `radial-gradient(circle, ${current.bgFrom}, ${current.bgTo})`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-white h-full flex flex-col justify-between items-center"
        >
          <Nav />

          <Header
            current={current}
            setCurrentShoe={setCurrentShoe}
            currentShoe={currentShoe}
          />
        </motion.div>
      </section>

      <section className="h-screen snap-start">
        <Colorway />
      </section>
    </main>
  );
}

export default App;
