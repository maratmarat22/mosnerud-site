import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Quarry from '@/domain/quarry';
import { quarriesMap, quarriesList } from '@/data/quarries';
import ProductContainer from '@/components/products/ProductContainer';
import ProductItem from '@/components/products/ProductItem';
import { productsMap } from '@/data/products';
import Image from 'next/image';

type QuarryPageProps = {
  quarry: Quarry | null;
};

export default function QuarryPage({ quarry }: QuarryPageProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  if (!quarry)
    return <h1 className="text-center text-2xl font-bold mt-10">NOT FOUND</h1>;

  return (
    <>
      <Head>
        <title>{`${quarry.name} карьер`}</title>
        <meta
          name="description"
          content={quarry.description ?? 'Описание отсутствует'}
        />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link
          href="/"
          onClick={handleClick}
          aria-label="Вернуться назад"
          className="fixed top-18 left-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors duration-200"
        >
          <span className="text-xl">←</span>
        </Link>

        <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
          <Image
            src={quarry.images[0]}
            alt={quarry.name}
            width={1200}
            height={600}
            className="w-full h-64 object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">{quarry.name}</h1>
        <p className="text-lg text-gray-700 mb-8">
          {quarry.description ?? 'Описание отсутствует'}
        </p>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Продукция:</h3>
          <ProductContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quarry.products.map((p) => (
              <ProductItem
                key={p[0]}
                product={productsMap[p[0]]}
                price={p[1]}
              />
            ))}
          </ProductContainer>
        </section>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = quarriesList.map((q) => ({
    params: { quarryId: q.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { quarryId } = context.params as { quarryId: string };
  const found = quarriesMap[quarryId];

  return {
    props: {
      quarry: found ?? null,
    },
  };
};
