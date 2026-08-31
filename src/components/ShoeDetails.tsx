import type { ShoeDetails } from "../types/shoes";
const ShoeDetails = ({ shoe }: ShoeDetails) => {
  return (
    <div
      className="h-full relative"
      style={{
        background: `${shoe?.bgFrom}`,
      }}
    >
      <div className="fixed left-8 top-1/2 flex flex-col gap-4 text-white">
        <span>01</span>
        <span className="opacity-40">02</span>
        <span className="opacity-40">03</span>
      </div>
      <div className="fixed z-10 top-1/4 left-[30%] inset-x-0 ">
        <img
          className="h-[60vh]  drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
          src={shoe?.image}
          alt=""
        />
      </div>
      <div className="h-screen relative">
        <h1 className="text-white uppercase text-7xl text-center font-bold font-bebas absolute bottom-0 w-full z-0 ">
          {shoe?.description}
        </h1>
      </div>
      <div className="h-screen w-full relative">
        <p className="absolute right-[-16%] top-1/2 -rotate-90 text-xs tracking-[0.4em] text-white/60">
          PUMA SPEEDCAT OG — MOTORSPORT INSPIRED
        </p>
        <h2 className="absolute right-10 top-[20%] text-[15rem] font-bebas font-bold text-white/10">
          01
        </h2>
        <div className="absolute text-white font-barlow left-[5%] top-[40%] ">
          <span className="text-sm tracking-[0.3em] opacity-60">
            FEATURE 01
          </span>
          <p className="font-bold text-4xl">LOW PROFILE</p>
          <span>Inspired by racing shoes</span>
          <div className="absolute left-full top-full h-0.5 rounded-full w-[12vw] rotate-20 bg-white/30" />
        </div>
      </div>
      <div className="h-screen relative">
        <p className="absolute right-[-16%] top-1/2 -rotate-90 text-xs tracking-[0.4em] text-white/60">
          PUMA SPEEDCAT OG — MOTORSPORT INSPIRED
        </p>
        <h2 className="absolute left-[5%] top-[20%] text-[15rem] font-bebas font-bold text-white/10">
          02
        </h2>
        <div className="absolute text-white font-barlow right-1/9 top-[40%] ">
          <span className="text-sm tracking-[0.3em] opacity-60">
            FEATURE 02
          </span>
          <p className="font-bold text-4xl">SUEDE UPPER</p>
          <span>A classic premium look</span>
        </div>
      </div>
      <div className="h-screen relative">
        <p className="absolute right-[-16%] top-1/2 -rotate-90 text-xs tracking-[0.4em] text-white/60">
          PUMA SPEEDCAT OG — MOTORSPORT INSPIRED
        </p>
        <h2 className="absolute right-10 top-[20%] text-[15rem] font-bebas font-bold text-white/10">
          03
        </h2>
        <div className="absolute text-white font-barlow left-[5%] top-[40%]">
          <span className="text-sm tracking-[0.3em] opacity-60">
            FEATURE 03
          </span>
          <p className="font-bold text-4xl">RUBBER OUTSOLE</p>
          <span>Designed for grip and movement</span>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetails;
