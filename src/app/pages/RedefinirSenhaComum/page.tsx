'use client';
import { useRouter } from "next/navigation";
import Botao from "@/app/component/Botao/Botao";
import Input from "@/app/component/Input/Input";
import Image from "next/image";
import { useState } from "react";

const RedefinirSenhaComum = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const handleRedefinirSenhaComum = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setSucesso(false);

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/usuario/atualizar-senha", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          novaSenha: senha,
        }),
      });

      const texto = await response.text();

      if (!response.ok) {
        throw new Error(texto || "Erro ao redefinir a senha");
      }

      setSucesso(true);
      setTimeout(() => {
        router.push("/pages/LoginComum");
      }, 2000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErro(err.message);
      } else {
        setErro("Erro inesperado. Tente novamente.");
      }
    }
  };

  return (
    <>
      <div className="w-full h-[300px] rounded-t-lg">
        <Image src="/image/onda_login.png" alt="" width={300} height={220} className="rounded-tl-lg" />
        <Image src="/image/logo.png" alt="logo" width={250} height={220} className="-translate-y-[230px] translate-x-[100px]" />
      </div>

      <form onSubmit={handleRedefinirSenhaComum} className="w-full h-[400px] flex flex-col items-center justify-center">
        <h2 className="text-[#212529] text-2xl">Redefinir Senha</h2>
        <h3 className="text-[#212529] mb-10 text-1xl">Comum</h3>

        <Input placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Digite sua nova senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <Input placeholder="Confirme a nova senha" type="password" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />

        {erro && <p className="text-red-500 mt-3">{erro}</p>}
        {sucesso && <p className="text-green-500 mt-3">Senha atualizada com sucesso!</p>}

        <br />
        <Botao corTexto="white" label="Redefinir" type="submit" />
      </form>
    </>
  );
};

export default RedefinirSenhaComum;
