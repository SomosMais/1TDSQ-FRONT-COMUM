'use client';
import { useEffect, useState } from "react";
import Cards from "@/app/component/Cards/Cards";
import Hotbar from "@/app/component/Hotbar/Hotbar";
import withAuth from "@/app/utils/withAuth";



interface PedidoAjuda {
  Nome: string;
  id_usuario: number;
  id_pedido: number;
  descricao: string;
  data_criacao: string;
  data_aceitacao: string;
  urgente: string;
  status: string;
  "tipo pedido": string;
}

const Historico = () => {
  const [pedidos, setPedidos] = useState<PedidoAjuda[]>([]);
  const [email, setEmail] = useState("");


  useEffect(() => {
  
   
    const emailSalvo = localStorage.getItem("email");
    if (emailSalvo) {
      setEmail(emailSalvo);
      fetch(`https://onetdsq-python.onrender.com/historico/cliente/${emailSalvo}`)
        .then((res) => res.json())
        .then((data) => {
         if (Array.isArray(data)) {
          setPedidos(data);
        } else {
          setPedidos([]);
          console.warn("Nenhum pedido retornado.");
        }

        })
        .catch((err) => {
          console.error("Erro ao buscar histórico:", err);
        });
    }
  }, []);

  return (
    <>
      <div className="w-full h-[740px] pt-[30px]">
        <div className="flex flex-col justify-start items-center w-full gap-10 h-[705px] overflow-y-auto px-4 scrollbar-none">
          <h1 className="text-2xl font-semibold text-left w-full">Solicitações de Ajuda</h1>

          {pedidos.length > 0 ? (
            pedidos.map((pedido, index) => (
              <Cards
                key={index}
                id={pedido.id_pedido}
                nome={pedido.Nome}
                data_abertura={pedido.data_criacao}
                data_aceitacao={pedido.data_aceitacao}
                tipo_ajuda={pedido["tipo pedido"]}
                descricao={pedido.descricao}
                urgente={pedido.urgente}
                onCancel={(id) => {
                  setPedidos((prev) => prev.filter((p) => p.id_pedido !== id));
                }}
              />
            ))
          ) : (
            <p className="text-lg text-gray-600 mt-4">Não há pedidos registrados.</p>
          )}

        </div>
      </div>
      <Hotbar />
    </>
  );
};

export default withAuth(Historico);
