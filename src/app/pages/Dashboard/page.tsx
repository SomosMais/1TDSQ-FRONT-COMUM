'use client';
import { useEffect, useState } from "react";

import Contador from "@/app/component/Contador/Constador";
import Explorar from "@/app/component/Explorar/Explorar";
import CardEmpresa from "@/app/component/CardEmpresa/CardEmpresa";
import Hotbar from "@/app/component/Hotbar/Hotbar";
import withAuth from "@/app/utils/withAuth";

// Interface tipada para empresa
interface Empresa {
  Nome: string;
  descricao?: string;
  endereco: string[];
}

const Dashboard = () => {
  const [qtdUsuarios, setQtdUsuarios] = useState(0);
  const [qtdOngs, setQtdOngs] = useState(0);
  const [empresas, setEmpresas] = useState<Empresa[]>([]); // <- Aqui corrigido

  useEffect(() => {
    // Total de usuários ajudados
    fetch("https://onetdsq-python.onrender.com/numero_pedidos_concluidos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar dados de pedidos concluídos");
        }
        return res.json();
      })
      .then((data) => {
        setQtdUsuarios(data["Numero de pedidos concluidos"]);
      })
      .catch((err) => {
        console.error("Erro ao buscar número de usuários ajudados:", err);
      });

    // Total de empresas (ONGs)
    fetch("https://onetdsq-python.onrender.com/numero_ongs")
      .then((res) => res.json())
      .then((data) => {
        setQtdOngs(data["Numero de empresas"]);
      })
      .catch((err) => {
        console.error("Erro ao buscar empresas:", err);
      });

    // Lista de empresas
    fetch("https://onetdsq-python.onrender.com/mostrar_ongs")
      .then((res) => res.json())
      .then((data) => {
        setEmpresas(data);
      })
      .catch((err) => {
        console.error("Erro ao buscar empresas parceiras:", err);
      });
  }, []);

  return (
    <>
      <div className="w-full h-[740px] pt-[30px]">
        <div className="flex justify-center items-center gap-10">
          <Contador titulo="Pessoas Ajudadas" quantidade={qtdUsuarios} icon="icon_pessoa_ajudada.png" />
          <Contador titulo="Empresas Ativas" quantidade={qtdOngs} icon="icon_empresa_ativa.png" />
        </div>

        <div className="flex flex-col mt-[20px] gap-2 w-full h-[200px] bg-gray-100 px-[15px] rounded-2xl shadow-lg">
          <h3 className="font-semibold text-2xl text-left">Explore também</h3>
          <div className="flex gap-10">
            <Explorar icon="icon_somos+.png" titulo="Conheça SOMOS+" href="Empresa" />
            <Explorar icon="icon_time.png" titulo="Nosso time" href="Grupo" />
            <Explorar icon="icon_jornal.png" titulo="Noticias" href="Noticias" />
          </div>
        </div>

        <div className="flex flex-col justify-start items-center w-full gap-1 mt-10 h-[380px]">
          <h1 className="text-2xl font-semibold text-left w-full ml-10">Empresas Parceiras</h1>
          <div className="flex flex-col overflow-y-auto px-4 scrollbar-none w-full gap-10 h-[380px]">
            {empresas.slice(1).map((empresa, index) => (
              <CardEmpresa
                key={index}
                nome={empresa.Nome}
                tipo_ajuda={"Ajuda Geral"}
                descricao={empresa.descricao || "Esta empresa está cadastrada para apoiar em causas humanitárias."}
                endereco={empresa.endereco.join(", ")}
                backgroundColor="#D5D5D5"
                backgroundColor2="#A8DADC"
              />
            ))}
          </div>
        </div>
      </div>

      <Hotbar />
    </>
  );
};

export default withAuth(Dashboard);
