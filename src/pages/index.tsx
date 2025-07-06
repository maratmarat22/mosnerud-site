import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>МосНеруд</title>
      </Head>
      <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-900 animate-fadeInDown">
          Добро пожаловать в <span className="text-indigo-600">МосНеруд</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-12 text-center text-gray-700 animate-fadeInUp delay-300">
          Ваш надежный партнер с 1998 года
        </h2>
        <ul className="space-y-6 max-w-xl mx-auto animate-fadeIn delay-600">
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg
                className="w-6 h-6 text-indigo-600 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Широкий ассортимент качественных нерудных материалов для любых
              нужд.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg
                className="w-6 h-6 text-indigo-600 animate-bounce delay-150"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Собственный автопарк и быстрая доставка по Москве и области.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg
                className="w-6 h-6 text-indigo-600 animate-bounce delay-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Профессиональная консультация и индивидуальный подход к каждому
              клиенту.
            </p>
          </li>
        </ul>
        <div className="mt-16 text-center animate-fadeIn delay-900">
          <Link href="/contacts">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition">
              Связаться с нами
            </button>
          </Link>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.7s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-900 {
          animation-delay: 0.9s;
        }
      `}</style>
    </>
  );
}
