'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa'; // Icono del globo

const LanguageContext: React.FC = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(true); // Predeterminado es inglés

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'es' : 'en'; // Alternar entre los idiomas

    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish); // Cambiar el estado del idioma
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        aria-label="Switch Language"
        className="flex items-center justify-center px-4 py-3 bg-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-500"
        onClick={toggleLanguage}
      >
        {/* Contenedor del toggle */}
        <div className="relative w-14 h-8 rounded-full p-2- m-2- ">
          {/* Fondo azul fijo */}
          <div className="absolute w-16 h-8 bg-blue-600 rounded-full" />

          {/* Círculo que se mueve */}
          <div
            className={`w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-1000 ease-in-out transform ${
              isEnglish ? 'translate-x-0' : 'translate-x-8'
            }`}
          >
            <span className="font-bold text-blue-500 text-xs">
              {isEnglish ? 'EN' : 'ES'}
            </span>
          </div>
        </div>

        {/* Icono del globo */}
        <span className="ml-3 text-sm font-medium text-gray-700">
          <FaGlobe className="text-gray-600" size={18} />
        </span>
      </button>
    </div>
  );
};

export default LanguageContext;
