/* eslint-disable prettier/prettier */
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Si no tienes react-icons, instálalo con npm install react-icons
const FloatingWhatsAppButton = () => {
  // Número de WhatsApp (pon aquí tu número real)
  const phoneNumber = "3022891396";

  return (
    <a
      className="fixed bottom-6 right-12 sm:right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
      href={`https://wa.me/${phoneNumber}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default FloatingWhatsAppButton;
