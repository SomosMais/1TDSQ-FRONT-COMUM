'use client';
import React from 'react';

interface NoticiaCardProps {
  titulo: string;
  resumo: string;
  onClick: () => void;
}

const NoticiaCard: React.FC<NoticiaCardProps> = ({ titulo, resumo, onClick }) => (
  <div
    className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100 w-full max-w-xl"
    onClick={onClick}
  >
    <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
    <p className="text-gray-600">{resumo}</p>
  </div>
);

export default NoticiaCard;
