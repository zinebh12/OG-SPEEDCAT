export type ShoeDisplayProps = {
  currentShoe: number;
  setCurrentShoe: React.Dispatch<React.SetStateAction<number>>;
  current: Shoe;
};

export type Shoe = {
  image: string;
  bgFrom: string;
  bgTo: string;
};
