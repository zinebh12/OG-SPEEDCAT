import shoes from "../data";
const Colorway = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {shoes.map((shoe, index) => (
        <div key={index} className="w-full h-full">
          <div
            className="w-full h-full relative flex items-center"
            style={{
              background: `radial-gradient(circle, ${shoe.bgFrom}, ${shoe.bgTo})`,
            }}
          >
            <h2 className="text-white text-5xl font-bebas font-extrabold px-4 hover:transition-transform duration-300 hover:-translate-y-2 cursor-pointer ">
              {shoe.color}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Colorway;
