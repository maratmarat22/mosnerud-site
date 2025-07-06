import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Quarry from '@/domain/quarry';
import { quarriesMap, quarriesList } from '@/data/quarries';

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

  if (!quarry) return <h1>NOT FOUND</h1>;

  return (
    <>
      <Head>
        <title>{`${quarry.name} карьер`}</title>
        <meta
          name="description"
          content={quarry.description ?? 'Описание отсутствует'}
        />
      </Head>
      <div>
        <Link href="/" onClick={handleClick} aria-label="Вернуться назад">
          ← Назад
        </Link>
        <h1>{quarry.name} карьер</h1>
        <h2>{quarry.description ?? 'Описание отсутствует'}</h2>
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
