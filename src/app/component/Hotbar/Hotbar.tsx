'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Hotbar = () => {
  const router = useRouter();

  const menuItems = [
    { label: 'Início', icon: '/icons/icon_home.png', path: '/pages/Dashboard' },
    { label: 'Solicitar', icon: '/icons/icon_adicionar.png', path: '/pages/Solicitar' },
    { label: 'Histórico', icon: '/icons/icon_historico.png', path: '/pages/Historico' },
    { label: 'Perfil', icon: '/icons/icon_configuracao.png', path: '/pages/Perfil' },
  ];

  return (
    <div className="bottom-0 w-full h-[60px] bg-[#E63946] shadow-lg flex justify-around items-center z-50 rounded-b-lg">
      {menuItems.map((item, idx) => (
        <button
          key={idx}
          onClick={() => router.push(item.path)}
          className="flex flex-col items-center white hover:text-white transition cursor-pointer"
        >
          <Image src={item.icon} alt={item.label} width={24} height={24} />
          <span className="text-sm mt-1 text-white">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Hotbar;