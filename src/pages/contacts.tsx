import Head from 'next/head';

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Связаться с нами
          </h1>

          <a
            href="tel:+77777732746281"
            className="flex items-center gap-4 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 13.05 13.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 9a16 16 0 0 0 6 6l.36-.36a2 2 0 0 1 2.11-.45 13.05 13.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Телефон: +7 777 773 27 46 81
          </a>

          <a
            href="mailto:sdasdasda@mail.ru"
            className="flex items-center gap-4 text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors"
          >
            <svg
              className="w-6 h-6 text-purple-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Почта: sdasdasda@mail.ru
          </a>
        </div>
      </main>
    </>
  );
}
