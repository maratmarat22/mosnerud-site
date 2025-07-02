import { useState } from 'react';
import { quarries } from '@/domain/quarry';
import QuarryContainer from '@/components/quarries/QuarryContainer';
import QuarryElement from '@/components/quarries/QuarryElement';

export default function Quarries() {
  const [quarryName, setQuarryName] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuarryName(e.target.value);
  };
  return (
    <div>
      <label htmlFor='quarry_name'>Поиск:</label>
      <input
        id='quarry_name'
        type='text'
        value={quarryName}
        onChange={handleChange}
        placeholder='Введите название карьера'
      />
      <h2 id='quarries'>Список карьеров:</h2>
      <QuarryContainer>
        {quarries.map((q) => (
          <QuarryElement key={q.id} quarry={q} />
        ))}
      </QuarryContainer>
    </div>
  );
}
