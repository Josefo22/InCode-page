import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  leftAlign?: boolean;
  fullWidth?: boolean;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  features,
  leftAlign = true,
  fullWidth = false,
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md border 
      bg-white/70 dark:bg-gray-800/60 
      border-gray-200 dark:border-gray-700 
      ${fullWidth ? 'w-full' : 'w-auto'}
      transition-colors duration-300`}
    >
      <div
        className={`flex ${
          leftAlign
            ? 'flex-col items-start'
            : 'flex-col items-center text-center'
        }`}
      >
        <div className="mb-4">{icon}</div>
        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h4>
      </div>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      {features && (
        <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      <button
        className="mt-6 w-full py-2 text-white 
        bg-blue-600 hover:bg-blue-700 
        dark:bg-blue-500 dark:hover:bg-blue-600 
        rounded-md transition-colors duration-300"
      >
        Solicitar Cotización
      </button>
    </div>
  );
};

export default Card;
