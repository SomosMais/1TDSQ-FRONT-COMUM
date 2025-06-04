'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hotbar from '@/app/component/Hotbar/Hotbar';


type Integrante = {
  nome: string;
  rm: string;
  turma: string;
  atividades: string;
  foto: string;
};

const integrantes: Integrante[] = [
  {
    nome: 'Cleyton Enrike de Oliveira',
    rm: '560485',
    turma: '1TDSQ',
    atividades: 'Desenvolvimento Backend com Flask e banco Oracle',
    foto: '/image/cleyton.png',
  },
  {
    nome: 'Matheus Henrique Nascimento de Freitas',
    rm: '560442',
    turma: '1TDSQ',
    atividades: 'Desenvolvimento do WEB APP em React e integração COM API REST',
    foto: '/image/matheus.png',
  },
  {
    nome: 'Pedro Henrique de Souza Sena',
    rm: '561178',
    turma: '1TDSQ',
    atividades: 'Desenvolvimento Web com Java Spring e Dashboards no portal',
    foto: '/image/pedro.jpg',
  },
];

const Grupo = () => {
  const [selecionado, setSelecionado] = useState<Integrante | null>(null);

  return (
    <>
      <div className="w-full h-[740px] p-6 flex flex-col items-center gap-10">
        <h1 className="text-3xl font-bold">Nosso Time</h1>

        <div className="flex flex-col gap-6 w-full items-center">
          {integrantes.map((int, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-2xl shadow-lg p-4 flex flex-col items-center w-[300px] cursor-pointer hover:bg-gray-200 transition"
              onClick={() => setSelecionado(int)}
            >
              <Image src={int.foto} alt={int.nome} width={100} height={100} className="rounded-full object-cover" />
              <h2 className="text-xl font-semibold mt-4 text-center">{int.nome}</h2>
            </div>
          ))}
        </div>
      </div>

      {selecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl max-w-[400px] w-full text-center shadow-xl relative">
            <button onClick={() => setSelecionado(null)} className="absolute top-2 right-4 text-xl font-bold">×</button>
            <Image src={selecionado.foto} alt={selecionado.nome} width={130} height={130} className="rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selecionado.nome}</h2>
            <p><strong>RM:</strong> {selecionado.rm}</p>
            <p><strong>Turma:</strong> {selecionado.turma}</p>
            <p className="mt-2 text-sm text-gray-700">{selecionado.atividades}</p>
          </div>
        </div>
      )}

      <Hotbar />
    </>
  );
};

export default Grupo;
