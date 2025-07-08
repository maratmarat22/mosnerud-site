import Product from '@/domain/product';
import { productsMap, productsList } from '@/data/products';
import { GetStaticPaths, GetStaticProps } from 'next';
/*import productI18n from '@/i18n/en-ru/productName.json';
import capitalize from '@/utils/capitalize';*/

type ProductPageProps = {
  product: Product | null;
};

export default function ProductPage({ product }: ProductPageProps) {
  if (!product) {
    return <h1>NOT FOUND</h1>;
  }

  return (
    <div>
      {/*<h1>
        {capitalize(productI18n[product.name as keyof typeof productI18n])}
      </h1>
      <h2>{product.price}</h2>*/}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = productsList.map((p) => ({
    params: {
      productId: p.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { productId } = context.params as { productId: string };
  const found = productsMap[productId];

  return {
    props: {
      product: found ?? null,
    },
  };
};
