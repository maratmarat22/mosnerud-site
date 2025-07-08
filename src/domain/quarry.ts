type Quarry = {
  id: string;
  name: string;
  description: string | null;
  products: [string, number][];
  images: string[];
};

export default Quarry;
