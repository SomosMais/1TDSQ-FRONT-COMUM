'use client';
import React from 'react';

interface NoticiaModalProps {
  titulo: string;
  conteudo: string;
  onClose: () => void;
}

const NoticiaModal: React.FC<NoticiaModalProps> = ({ titulo, conteudo, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
      <p className="text-gray-700 whitespace-pre-wrap">{conteudo}</p>
    </div>
  </div>
);

export default NoticiaModal;
