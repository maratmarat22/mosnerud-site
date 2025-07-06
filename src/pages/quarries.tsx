import { useState, useEffect } from 'react';
import QuarryContainer from '@/components/quarries/QuarryContainer';
import QuarryItem from '@/components/quarries/QuarryItem';
import Head from 'next/head';
import Quarry from '@/domain/quarry';
import { quarriesList, filterQuarries } from '@/data/quarries';

export default function Quarries() {
  const [searchInput, setSearchInput] = useState('');
  const [searchCheckboxes, setSearchCheckboxes] = useState<string[]>([]);
  const [suggestedQuarries, setSuggestedQuarries] =
    useState<Quarry[]>(quarriesList);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleSearchCheckboxChange = (type: string) => {
    setSearchCheckboxes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  useEffect(() => {
    setSuggestedQuarries(filterQuarries(searchInput, searchCheckboxes));
  }, [searchInput, searchCheckboxes]);

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
              value={searchInput}
              onChange={handleSearchInputChange}
              placeholder="Например, Гранитный карьер"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
            />
          </div>

          <div className="flex gap-6 mt-4">
            {[
              { label: 'Песчаный', value: 'sand' },
              { label: 'Гравийный', value: 'gravel' },
            ].map(({ label, value }) => (
              <label key={value} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value={value}
                  onChange={() => handleSearchCheckboxChange(value)}
                  className="peer hidden"
                ></input>
                <div className="w-5 h-5 rounded border-2 border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors"></div>
                <span className="ml-2 text-gray-800">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Список карьеров:</h2>
        <QuarryContainer>
          {suggestedQuarries.map((q) => (
            <QuarryItem key={q.id} quarry={q} />
          ))}
        </QuarryContainer>
      </div>
    </>
  );
}
