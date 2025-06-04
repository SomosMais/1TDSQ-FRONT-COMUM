'use client';

import React, { useState } from 'react';
import withAuth from "@/app/utils/withAuth";
import NoticiaCard from '@/app/component/NoticiaCard/NoticiaCard';
import NoticiaModal from '@/app/component/NoticiaCard/NoticiaModal';
import Hotbar from '@/app/component/Hotbar/Hotbar';

interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  conteudo: string;
}

const Noticias = () => {
  const [noticiaSelecionada, setNoticiaSelecionada] = useState<Noticia | null>(null);

  const noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Enchentes afetam região Sul do Brasil',
      resumo: 'Fortes chuvas causam destruição e deixam milhares desabrigados no Sul.',
      conteudo: 'Desde o início da semana, chuvas intensas provocaram alagamentos em diversas cidades do Rio Grande do Sul e Santa Catarina. A Defesa Civil está atuando nas áreas mais críticas, enquanto ONGs e voluntários organizam pontos de coleta de doações. Estima-se que mais de 15 mil pessoas precisaram deixar suas casas. O governo federal decretou estado de emergência em 12 municípios.',
    },
    {
      id: 2,
      titulo: 'Campanha nacional arrecada toneladas de alimentos',
      resumo: 'A solidariedade se espalha e ajuda chega às famílias atingidas.',
      conteudo: 'A campanha "Brasil Unido pela Ajuda", organizada por empresas, igrejas e ONGs, já arrecadou mais de 50 toneladas de alimentos, além de roupas e itens de higiene. A iniciativa surgiu após as enchentes no Sul e se espalhou por todo o país. Caminhões estão sendo enviados para as áreas mais afetadas, com o apoio logístico do Exército Brasileiro.',
    },
    {
      id: 3,
      titulo: 'Tecnologia ajuda no monitoramento de enchentes',
      resumo: 'Sistemas de IA e sensores estão sendo utilizados na prevenção de desastres.',
      conteudo: 'Várias cidades brasileiras começaram a implementar sensores em rios e bueiros, integrados a sistemas de inteligência artificial. A ideia é prever situações de risco com antecedência e emitir alertas à população. Em São Paulo, o sistema já conseguiu evitar alagamentos em três bairros ao redirecionar automaticamente o escoamento de água.',
    },
    {
      id: 4,
      titulo: 'Abrigos comunitários recebem apoio da população',
      resumo: 'Espaços temporários recebem mantimentos e apoio psicológico.',
      conteudo: 'Diversos abrigos em escolas, ginásios e igrejas têm recebido moradores desabrigados pelas enchentes. Psicólogos voluntários estão auxiliando famílias em choque, e equipes de saúde fazem o controle de doenças. Empresas locais têm doado colchões, cobertores e alimentos prontos, enquanto a comunidade se organiza com cozinhas solidárias.',
    },
    {
      id: 5,
      titulo: 'Estudantes desenvolvem aplicativo de alerta de enchentes',
      resumo: 'Projeto universitário propõe solução digital para situações de emergência.',
      conteudo: 'Um grupo de estudantes de tecnologia da FIAP desenvolveu um app que coleta dados meteorológicos e avisa moradores de áreas de risco sobre possíveis enchentes. O aplicativo, que já está em fase de testes, permite que os usuários enviem alertas em tempo real e acessem pontos de apoio próximos. O projeto foi elogiado por agentes da Defesa Civil.',
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-6 h-[740px] overflow-y-auto scrollbar-none">
        <h1 className="text-3xl font-bold mb-4">Últimas Notícias sobre Desastres e Ações Solidárias</h1>

        {noticias.map(noticia => (
          <NoticiaCard
            key={noticia.id}
            titulo={noticia.titulo}
            resumo={noticia.resumo}
            onClick={() => setNoticiaSelecionada(noticia)}
          />
        ))}

        {noticiaSelecionada && (
          <NoticiaModal
            titulo={noticiaSelecionada.titulo}
            conteudo={noticiaSelecionada.conteudo}
            onClose={() => setNoticiaSelecionada(null)}
          />
        )}
      </div>
      <Hotbar />
    </>
  );
};

export default withAuth(Noticias);
