type Quarry = {
  id: string;
  name: string;
  type: 'sand' | 'gravel';
  description: string | null;
  images: string[];
};

export default Quarry;
