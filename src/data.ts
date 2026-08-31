import redSpeedcat from "./assets/red-speedcat.png";
import redShoeImage from "./assets/redShoeImage.png";
import redPants from "./assets/red-pants.png";
import speedCatRedStreet from "./assets/speedcat-red-street.webp";

import graySpeedcat from "./assets/gray-speedcat.png";
import grayShoeImage from "./assets/grayShoeImage.png";
import grayPants from "./assets/gray-pants.png";
import graySpeedcatStreet from "./assets/gray-speedcat-street.jpeg";

import royalSpeedcat from "./assets/royal-speedcat.png";
import royalShoe from "./assets/royalShoeImage.png";
import royalPants from "./assets/royal-pants.png";
import speedCatRoyalStreet from "./assets/royal-speedcat-street.jpg";

import emeraldSpeedcat from "./assets/emerald-speedcat.png";
import emeraldShoe from "./assets/emeraldShoe.png";
import emeraldPants from "./assets/emerald-pants.png";
import emeraldSpeedcatStreet from "./assets/emerald-speedcat-street.webp";

import type { Shoe } from "./types/shoes";

const shoes: Shoe[] = [
  {
    image: redSpeedcat,
    bgFrom: "#F04444",
    bgTo: "#FFB36B",
    color: "Red",
    image1: redPants,
    image2: redShoeImage,
    image3: speedCatRedStreet,
    description: "An icon of racing culture",
  },
  {
    image: royalSpeedcat,
    bgFrom: "#2563EB",
    bgTo: "#93C5FD",
    color: "Royal",
    image1: royalPants,
    image2: royalShoe,
    image3: speedCatRoyalStreet,

    description:
      "An icon of racing culture, the PUMA Speedcat has been synonymous with speed, precision, and unparalleled performance for over 25 years. It originated as a fireproof Formula 1® footwear style, but over the decades it found itself on a new circuit – transcending the tracks of Monaco for the streets of global fashion capitals. Wrapped in soft suede and premium leather, this silhouette is reissued in its original red and black colorways with a new PUMA Cat Logo at the front.",
  },
  {
    image: graySpeedcat,
    bgFrom: "#525252",
    bgTo: "#E5E5E5",
    color: "Gray",
    image1: grayPants,
    image2: grayShoeImage,
    image3: graySpeedcatStreet,

    description:
      "An icon of racing culture, the PUMA Speedcat has been synonymous with speed, precision, and unparalleled performance for over 25 years. It originated as a fireproof Formula 1® footwear style, but over the decades it found itself on a new circuit – transcending the tracks of Monaco for the streets of global fashion capitals. Wrapped in soft suede and premium leather, this silhouette is reissued in its original red and black colorways with a new PUMA Cat Logo at the front.",
  },
  {
    image: emeraldSpeedcat,
    bgFrom: "#047857",
    bgTo: "#A7F3D0",
    color: "Emerald",
    image1: emeraldPants,
    image2: emeraldShoe,
    image3: emeraldSpeedcatStreet,

    description:
      "An icon of racing culture, the PUMA Speedcat has been synonymous with speed, precision, and unparalleled performance for over 25 years. It originated as a fireproof Formula 1® footwear style, but over the decades it found itself on a new circuit – transcending the tracks of Monaco for the streets of global fashion capitals. Wrapped in soft suede and premium leather, this silhouette is reissued in its original red and black colorways with a new PUMA Cat Logo at the front.",
  },
];

export default shoes;
