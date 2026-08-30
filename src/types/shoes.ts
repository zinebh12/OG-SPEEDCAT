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
};

export type ColorwayProps = {
  setCurrentShoe: React.Dispatch<React.SetStateAction<number | null>>;
  setHasSelectedShoe: React.Dispatch<React.SetStateAction<boolean>>;
};
