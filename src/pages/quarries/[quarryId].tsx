import { GetStaticPaths, GetStaticProps } from 'next';
import { Quarry, quarries, findQuarryById } from '@/domain/quarry';

type Props = {
  quarry: Quarry | null;
};

export default function QuarryPage({ quarry }: Props) {
  if (!quarry) return <h1>NOT FOUND</h1>;

  return (
    <div>
      <h1>{quarry.name} карьер</h1>
      <h2>{quarry.description ?? 'Описание отсутствует'}</h2>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = quarries.map((q) => ({
    params: { quarryId: q.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { quarryId } = context.params as { quarryId: string };
  const found = findQuarryById(quarryId);

  return {
    props: {
      quarry: found ?? null,
    },
  };
};
