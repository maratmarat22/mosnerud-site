import React, { useEffect, useState } from 'react';

const OrderModal = ({ handleShowModal }: { handleShowModal: () => void }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`fixed inset-0 w-full h-full z-5 backdrop-filter backdrop-brightness-75 backdrop-blur-md transition-opacity duration-300 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleShowModal}
    >
      {/* Центрируем модалку, клики внутри нее не должны закрывать */}
      <div
        className="bg-white rounded-lg shadow-lg mx-auto p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Добавлено пояснение о минимальном заказе */}
        <div className="text-red-600 font-medium text-center mb-6">
          *Минимальный заказ от 20 кубометров
        </div>

        <section className="border-t border-gray-200 mt-6 pt-8 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-700">
            Контактная информация
          </h3>

          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h4 className="font-medium text-gray-800 mb-2">Телефон</h4>
              <a
                href="tel:+77777732746281"
                className="inline-flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 transition text-lg font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 13.05 13.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 9a16 16 0 0 0 6 6l.36-.36a2 2 0 0 1 2.11-.45 13.05 13.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +7 (777) 773-27-46
              </a>
            </div>

            <div className="text-center">
              <h4 className="font-medium text-gray-800 mb-2">
                Электронная почта
              </h4>
              <a
                href="mailto:info@example.com"
                className="inline-flex items-center justify-center gap-2 text-gray-600 hover:text-purple-600 transition text-lg font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <polyline points="3,7 12,13 21,7" />
                </svg>
                info@example.com
              </a>
            </div>

            <div className="text-center">
              <h4 className="font-medium text-gray-800 mb-2">График работы</h4>
              <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-gray-600">Сб-Вс: выходной</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderModal;
