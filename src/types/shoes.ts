export type ShoeDisplayProps = {
  currentShoe: number | null;
  setCurrentShoe: React.Dispatch<React.SetStateAction<number | null>>;
  current: Shoe | null;
};

export type Shoe = {
  image: string;
  bgFrom: string;
  bgTo: string;
  color: string;
  image1: string;
  image2: string;
  image3: string;
  description: string;
};

// export type ColorwayProps = {
//   setCurrentShoe: React.Dispatch<React.SetStateAction<number | null>>;
//   setSelectedShoe: React.Dispatch<React.SetStateAction<number | null>>;
//   hasSelectedShoe: boolean;
//   onBack: () => void;
// };

export type ColorwayProps = {
  onSelectShoe: (index: number) => void;
};

export type MotorSportProps = {
  shoe: Shoe | null;
  onBack: () => void;
};
