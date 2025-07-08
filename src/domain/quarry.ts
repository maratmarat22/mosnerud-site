type Quarry = {
  id: string;
  name: string;
  descriptionShort?: string;
  descriptionFull?: string;
  products: [string, number][];
  images: string[];
};

export default Quarry;
