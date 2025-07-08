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
import { useState } from 'react';
import OrderModal from '@/components/OrderModal';

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

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  if (!quarry)
    return <h1 className="text-center text-2xl font-bold mt-10">NOT FOUND</h1>;

  return (
    <>
      <Head>
        <title>{`${quarry.name}`}</title>
        <meta
          name="description"
          content={quarry.descriptionShort ?? 'Описание отсутствует'}
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        {/* FAB-кнопка "назад" */}
        <Link
          href="/"
          onClick={handleClick}
          aria-label="Назад"
          className="fixed bottom-6 left-6 z-1 w-12 h-12 rounded-full bg-white shadow-md hover:bg-blue-100 text-gray-700 hover:text-blue-600 flex items-center justify-center transition-colors"
        >
          ←
        </Link>

        {showModal && <OrderModal handleShowModal={handleShowModal} />}

        {/* 📸 Изображение */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src={quarry.images[0]}
            alt={quarry.name}
            width={1200}
            height={600}
            className="w-full h-72 object-cover"
          />
        </div>

        {/* 📖 Описание */}
        <section className="bg-gray-50 rounded-xl p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {quarry.name}
          </h1>
          <p className="text-base md:text-lg text-gray-700 whitespace-pre-wrap leading-relaxed">
            {quarry.descriptionFull ??
              quarry.descriptionShort ??
              'Описание отсутствует'}
          </p>
        </section>

        {/* 📦 Продукция */}
        <section className="border-t pt-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Продукция
          </h2>
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

        {/* ✉️ Контакты */}

        <button
          onClick={handleShowModal}
          className="
      bg-green-600 hover:bg-green-700
      text-white font-semibold
      rounded-full
      px-8 py-4
      shadow-lg
      transition-colors duration-300
      block
      mx-auto
    "
        >
          Заказать
        </button>
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
