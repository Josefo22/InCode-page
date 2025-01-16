'use client'; // Asegúrate de que este comentario esté al inicio del archivo

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Si no tienes react-icons, instálalo con npm install react-icons

const FloatingWhatsAppButton = () => {
  // Número de WhatsApp (pon aquí tu número real)
  const phoneNumber = '3022891396';

  // Estado para manejar la visibilidad del mensaje
  const [showMessage, setShowMessage] = useState(false);

  // Función para mostrar el mensaje y ocultarlo después de 3 segundos
  useEffect(() => {
    setShowMessage(true); // Mostrar el mensaje cuando se carga la página
    const timer = setTimeout(() => {
      setShowMessage(false); // Ocultar el mensaje después de 3 segundos
    }, 3000); // El mensaje desaparece después de 3 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonta
  }, []); // Se ejecuta solo una vez, al montar el componente

  return (
    <div className="fixed bottom-6 right-12 sm:right-8 flex items-center justify-center md:justify-start space-x-4">
      {/* Mostrar el mensaje de WhatsApp solo si `showMessage` es true */}
      {showMessage && (
        <div className="bg-green-500 text-white p-2 rounded-lg shadow-lg text-sm sm:text-base">
          Comunícate con nosotros
        </div>
      )}

      <a
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
        href={`https://wa.me/${phoneNumber}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
