import { useState } from 'react';
import { useRouter } from 'next/router';
import { quarries } from '@/domain/quarry';
import QuarryContainer from '@/components/quarries/QuarryContainer';
import QuarryItem from '@/components/quarries/QuarryItem';
import Head from 'next/head';

export default function Quarries() {
  const [quarryName, setQuarryName] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuarryName(e.target.value);
  };

  const handleClick = () => {
    const selectedQuarry = quarries.find(
      (q) => q.name.toLowerCase() === quarryName.toLowerCase(),
    );
    if (selectedQuarry) {
      router.push(`/quarries/${selectedQuarry.id}`);
    } else {
      setQuarryName('');
    }
  };

  return (
    <>
      <Head>
        <title>Карьеры</title>
      </Head>

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Поиск карьера</h1>

        {/* Контейнер для input + кнопка */}
        <div className="mb-8">
          <label
            htmlFor="quarry-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Введите название:
          </label>

          {/* flex-контейнер для input и кнопки */}
          <div className="flex items-center gap-4">
            <input
              id="quarry-name"
              list="quarry-suggestions"
              value={quarryName}
              onChange={handleChange}
              placeholder="Например, Гранитный карьер"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
            />
            <button
              onClick={handleClick}
              className="px-4 py-1.5 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition h-7 inline-flex items-center justify-center"
            >
              Перейти
            </button>
          </div>

          <datalist id="quarry-suggestions">
            {quarries.map((q) => (
              <option key={q.id} value={q.name} />
            ))}
          </datalist>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Список карьеров:</h2>
        <QuarryContainer>
          {quarries.map((q) => (
            <QuarryItem key={q.id} quarry={q} />
          ))}
        </QuarryContainer>
      </div>
    </>
  );
}
