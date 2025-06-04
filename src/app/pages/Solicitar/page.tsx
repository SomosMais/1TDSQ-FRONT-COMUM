'use client';
import { useRouter } from "next/navigation";
import Botao from "@/app/component/Botao/Botao";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Hotbar from "@/app/component/Hotbar/Hotbar";


const SolicitarAjuda = () => {

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const [descricao, setDescricao] = useState("");
  const [urgencia, setUrgencia] = useState("");
  const [tipo, setTipo] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const emailUsuario = localStorage.getItem("email");
    if (!emailUsuario) {
      router.push("/pages/LoginComum"); // Redireciona se não estiver logado
      return;
    }
    if (id) {
      fetch(`https://onetdsq-python.onrender.com/historico/cliente/${localStorage.getItem("email")}`)
        .then((res) => res.json())
        .then((data) => {
          const pedido = data.find((p: any) => p.id_pedido == id);
          if (pedido) {
            console.log("Editando pedido:", pedido);
            setDescricao(pedido.descricao);
            setUrgencia(pedido.urgente);
            setTipo(pedido.id_tipo_pedido?.toString() ?? "");
          }
        });
    }
  }, [id]);


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const email_usuario = localStorage.getItem("email");

  if (!descricao || !urgencia || !tipo || !email_usuario) {
    setMensagem("Preencha todos os campos!");
    return;
  }

  const url = id
    ? `https://onetdsq-python.onrender.com/atualizar_pedido/${id}`
    : `https://onetdsq-python.onrender.com/cadastro_pedido_ajuda`;

  const metodo = id ? "PATCH" : "POST";

  try {
    const response = await fetch(url, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        descricao,
        urgencia,
        tipo,
        email_usuario,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.msg);
      router.push("/pages/Historico");
    } else {
      setMensagem(data.msg || "Erro na operação.");
    }
  } catch (error) {
    console.error("Erro:", error);
    setMensagem("Erro na solicitação. Tente novamente.");
  }
};


  return (
    <>
      <div className="w-full h-[300px] rounded-t-lg">
        <Image src="/image/onda_login.png" alt="" width={300} height={220} className="rounded-tl-lg" />
        <Image src="/image/logo.png" alt="logo" width={250} height={220} className="-translate-y-[230px] translate-x-[100px]" />
      </div>

      <form onSubmit={handleSubmit} className="w-full h-[440px] flex flex-col items-center justify-center px-10">
        <h2 className="text-[#212529] mb-6 text-2xl">Solicitar Ajuda</h2>

        {/* Tipo de ajuda */}
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full h-[50px] border border-gray-300 rounded-lg mb-4 px-2"
        >
          <option value="">Selecione o tipo de ajuda</option>
          <option value="1">Resgate de Vítimas</option>
          <option value="2">Resgate de Animais</option> 
          <option value="3">Ajuda Humanitária</option>
          <option value="4">Apoio em Enchentes</option>
          <option value="5">Apoio em Deslizamento</option>
          <option value="6">Transporte de Vítimas</option>
          <option value="7">Busca e Salvamento</option>
          <option value="8">Atendimento Médico</option>
          <option value="9">Doação de Alimentos</option>
          <option value="10">Doação de Roupas</option>
          <option value="11">Solicitação de Abrigo</option>
          <option value="12">Acesso a Água Potável</option>
          <option value="13">Forcecimento de Energia Emergencial</option>
        </select>

        {/* Descrição */}
        <textarea
          value={descricao}
          onChange={(e) => {
            if (e.target.value.length <= 255) setDescricao(e.target.value);
          }}
          className="w-full h-[100px] border border-gray-300 rounded-lg mb-1 px-2 py-1 resize-none"
          placeholder="Descreva a situação..."
        ></textarea>
        <p className="text-sm text-right w-full mb-4 text-gray-500">{descricao.length}/255</p>

        {/* Urgência */}
        <select
          value={urgencia}
          onChange={(e) => setUrgencia(e.target.value)}
          className="w-full h-[50px] border border-gray-300 rounded-lg mb-4 px-2"
        >
          <option value="">Selecione a urgência</option>
          <option value="S">Urgente</option>
          <option value="N">Não Urgente</option>
        </select>

        {mensagem && <p className="text-red-500 text-sm mb-2">{mensagem}</p>}

        <Botao corTexto="white" label="Solicitar" type="submit" />
      </form>

      <Hotbar />
    </>
  );
};

export default SolicitarAjuda;
