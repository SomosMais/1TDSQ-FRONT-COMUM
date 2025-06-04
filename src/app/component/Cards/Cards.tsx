
import React from 'react';

type CardsProps = {
    id?: number;
    nome: string;
    data_abertura?: string;
    data_aceitacao?: string;
    tipo_ajuda: string;
    descricao: string;
    urgente?: string
    onCancel?: (id: number) => void;
}

const Cards: React.FC<CardsProps> = (
    {id, nome = "Nome", data_abertura, data_aceitacao='Data aceitacao', tipo_ajuda="Tipo Ajuda", descricao = "Descricao",
        urgente = 'N',
        onCancel 
    }
) => {

    const corUrgente = urgente === 'S' ? '#E97777' : '#9FE977';
    const tipoStatus = data_aceitacao ? "Atendido" : "Pendente";
    const corStatus = data_aceitacao ? '#9FE977' : '#E9E977';

    const handleCancelar = () => {
    if (id) {
      if (confirm("Tem certeza que deseja cancelar este pedido?")) {
        fetch(`https://onetdsq-python.onrender.com/cancelar_pedido/${id}`)
          .then((res) => res.json())
          .then((data) => {
            alert(data.msg);
            if (onCancel) onCancel(id);
          })
          .catch((err) => {
            console.error("Erro ao cancelar pedido:", err);
            alert("Erro ao cancelar o pedido.");
          });
      }
    }
  };

    return(
        <>
            <div className="w-[400px]  bg-gray-50 rounded-2xl flex justify-center items-center shadow-lg hover:bg-gray-100">
                <div className="w-[400px] rounded-2xl flex">
                    <div className="w-[25px]  rounded-l-2xl" style={
                        {backgroundColor: corUrgente }
                    }></div>
                    <div className="flex flex-col p-3 w-full">
                        <div className='flex gap-2'>
                            <h4 className="font-semibold text-left">{nome}</h4>
                            {tipoStatus !== "Atendido" && (
                        <div className="flex gap-5">
                            <button onClick={handleCancelar} className="text-[#E63946] hover:underline">
                            Cancelar
                            </button>
                            <button
                            onClick={() => {
                                if (id) {
                                window.location.href = `/pages/Solicitar?id=${id}`;
                                }
                            }}
                            className="text-blue-600 hover:underline"
                            >
                            Editar
                            </button>
                        </div>
                        )}
                        </div>
                        
                        <p className="text-[12px]">{data_abertura}</p>
                        {data_aceitacao && (
                            <p className="text-[12px]">Aceito em: {data_aceitacao}</p>
                        )}
                        <div className='flex justify-start items-center gap-2 mt-2 mb-2'>
                            <span className="w-[180px] font-semibold text-[13px] text-center rounded-full  p-1 " style={{backgroundColor: corUrgente }}>{tipo_ajuda}</span>
                            <span className="w-[100px] font-semibold text-[13px] text-center rounded-full p-1" style={{ backgroundColor: corStatus }}>
                                {tipoStatus}
                            </span>
                        </div>
                        <p>{descricao}</p>
                    </div>
                </div>

                
            </div>
        </>
    )
}
export default Cards;