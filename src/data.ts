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
    color: "Red",
  },
  {
    image: navySpeedcat,
    bgFrom: "#172554",
    bgTo: "#38BDF8",
    color: "Navy",
  },
  {
    image: graySpeedcat,
    bgFrom: "#525252",
    bgTo: "#E5E5E5",
    color: "Gray",
  },
  {
    image: greenSpeedcat,
    bgFrom: "#15803D",
    bgTo: "#BEF264",
    color: "Green",
  },
];

export default shoes;
