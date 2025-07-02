import { GetStaticPaths, GetStaticProps } from 'next';
import { objects, findObjectById } from '@/lib/objects';

type Props = {
  value: string | null;
};

export default function QuarryPage({ value }: Props) {
  if (value) {
    return <h1>Вы открыли шаблон: {value}</h1>;
  } else {
    return <h1>NOT FOUND</h1>;
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = objects.map((o) => ({
    params: { quarry: o.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { quarry } = context.params as { quarry: string };
  const object = findObjectById(quarry);

  return {
    props: {
      value: object ? object.value : null,
    },
  };
};
