'use client';

import Hotbar from '@/app/component/Hotbar/Hotbar';
import Image from 'next/image';
import withAuth from "@/app/utils/withAuth";


  
const SomosMais = () => {

  return (
    <>
      <div className="w-full h-[740px] p-6 overflow-y-auto px-4 scrollbar-none">
        <div className="flex flex-col items-center justify-start gap-6">
          <Image src="/image/logo.png" alt="Logo Somos+" width={180} height={180} />
          <h1 className="text-3xl font-bold text-[#212529] text-center">Quem somos</h1>

          <p className="text-lg text-gray-700 text-justify max-w-[800px]">
            A <strong>SOMOS+</strong> é uma iniciativa voltada a conectar pessoas em situação de vulnerabilidade com organizações parceiras que oferecem ajuda humanitária, especialmente em momentos críticos causados por desastres naturais como tempestades e enchentes.
          </p>

          <p className="text-lg text-gray-700 text-justify max-w-[800px]">
            Nosso propósito é proporcionar uma ponte segura entre quem precisa de apoio e quem pode oferecer assistência. Por meio da tecnologia, oferecemos uma plataforma simples, acessível e eficiente que permite o registro de pedidos de ajuda e a visualização desses pedidos por ONGs, empresas e voluntários engajados.
          </p>

          <p className="text-lg text-gray-700 text-justify max-w-[800px]">
            Acreditamos que a solidariedade pode ser potencializada com o uso de dados e inovação. Por isso, estamos comprometidos em promover um ecossistema digital colaborativo, onde cada ação conta e cada pessoa importa.
          </p>

          <p className="text-lg text-gray-700 text-justify max-w-[800px]">
            Juntos, somos mais fortes. Juntos, <strong> SOMOS+</strong>.
          </p>
        </div>
      </div>

      <Hotbar />
    </>
  );
};

export default withAuth(SomosMais);
