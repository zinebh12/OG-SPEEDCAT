import redSpeedcat from "./assets/red-speedcat.png";
import graySpeedcat from "./assets/gray-speedcat.png";
import navySpeedcat from "./assets/navy-speedcat.png";
import greenSpeedcat from "./assets/green-speedcat.png";
import type { Shoe } from "./types/shoes";

const shoes: Shoe[] = [
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

export default shoes;
