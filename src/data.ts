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
    description:
      "An icon of racing culture, the PUMA Speedcat has been synonymous with speed, precision, and unparalleled performance for over 25 years. It originated as a fireproof Formula 1® footwear style, but over the decades it found itself on a new circuit – transcending the tracks of Monaco for the streets of global fashion capitals. Wrapped in soft suede and premium leather, this silhouette is reissued in its original red and black colorways with a new PUMA Cat Logo at the front.",
  },
  {
    image: navySpeedcat,
    bgFrom: "#172554",
    bgTo: "#38BDF8",
    color: "Navy",
    description:
      "An icon of racing culture, the PUMA Speedcat has been synonymous with speed, precision, and unparalleled performance for over 25 years. It originated as a fireproof Formula 1® footwear style, but over the decades it found itself on a new circuit – transcending the tracks of Monaco for the streets of global fashion capitals. Wrapped in soft suede and premium leather, this silhouette is reissued in its original red and black colorways with a new PUMA Cat Logo at the front.",
  },
  {
    image: graySpeedcat,
    bgFrom: "#525252",
    bgTo: "#E5E5E5",
    color: "Gray",
    description:
      "An icon of racing culture, the PUMA Speedcat has been synonymous with speed, precision, and unparalleled performance for over 25 years. It originated as a fireproof Formula 1® footwear style, but over the decades it found itself on a new circuit – transcending the tracks of Monaco for the streets of global fashion capitals. Wrapped in soft suede and premium leather, this silhouette is reissued in its original red and black colorways with a new PUMA Cat Logo at the front.",
  },
  {
    image: greenSpeedcat,
    bgFrom: "#15803D",
    bgTo: "#BEF264",
    color: "Green",
    description:
      "An icon of racing culture, the PUMA Speedcat has been synonymous with speed, precision, and unparalleled performance for over 25 years. It originated as a fireproof Formula 1® footwear style, but over the decades it found itself on a new circuit – transcending the tracks of Monaco for the streets of global fashion capitals. Wrapped in soft suede and premium leather, this silhouette is reissued in its original red and black colorways with a new PUMA Cat Logo at the front.",
  },
];

export default shoes;
