import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-gray-900 text-white shadow-lg'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Логотип и название */}
        <Link
          href='/'
          className='flex items-center space-x-2 hover:opacity-80 transition-opacity'
        >
          <span className='text-2xl'>🪨</span>
          <span className='text-xl font-bold'>MosNerud</span>
          <span className='text-gray-300 hidden sm:inline'>
            — Песок и Щебень
          </span>
        </Link>

        {/* Навигация */}
        <nav className='flex items-center space-x-6'>
          <Link
            href='/about'
            className='hover:text-amber-400 transition-colors px-2 py-1 rounded hover:bg-gray-800'
          >
            О нас
          </Link>
          <Link
            href='/quarries'
            className='hover:text-amber-400 transition-colors px-2 py-1 rounded hover:bg-gray-800'
          >
            Карьеры
          </Link>
          <Link
            href='/contacts'
            className='hover:text-amber-400 transition-colors px-2 py-1 rounded hover:bg-gray-800'
          >
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}
