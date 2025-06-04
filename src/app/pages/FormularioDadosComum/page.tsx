'use client';
import { useRouter } from "next/navigation";
import Botao from "@/app/component/Botao/Botao";
import Input from "@/app/component/Input/Input";
import Image from "next/image";
import { useState, useEffect } from "react";


const FormularioDadosComum = () => {
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCpf] = useState("");
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [uf, setUF] = useState("");

    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState(false);
    useEffect(() => {
        const buscarEndereco = async () => {
            if (cep.length === 8) {
                try {
                    const response = await fetch(`http://localhost:8080/endereco/buscar/${cep}`);
                    if (!response.ok) throw new Error("Erro ao buscar endereço");
                    const data = await response.json();

                    setEndereco(data.logradouro || "");
                    setBairro(data.bairro || "");
                    setLocalidade(data.localidade || "");
                    setUF(data.uf || "");
                } catch (err) {
                    console.error("Erro ao buscar endereço:", err);
                }
            }
        };

        buscarEndereco();
    }, [cep]);


    const handleCadastroComum = async (e: React.FormEvent) => {
        e.preventDefault();

        setErro("");
        setSucesso(false);

        try{
            const response = await fetch("http://localhost:8080/usuario/cadastrar",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome,
                    email,
                    senha,
                    cpf,
                    endereco: {
                        cep,
                        logradouro: endereco,
                        numero,
                        bairro,
                        localidade,
                        uf
                    }
                }),
            });
            if (!response.ok) {
                throw new Error("Erro ao cadastrar usuário");
            }

            setSucesso(true);
            router.push("/pages/LoginComum");
        }
        catch (err: any) {
            setErro(err.message || "Erro ao cadastrar usuário. Tente novamente.");
        }
    }

    return (
        <>
        <div className="w-full h-[320px]  rounded-t-lg">
            <Image src={"/image/onda_login.png"} alt="" width={300} height={220} className="rounded-tl-lg"/>
            <Image src={"/image/logo.png"} alt="logo" width={250} height={220} className="-translate-y-[230px] translate-x-[100px]"/>
        </div>

        <form onSubmit={handleCadastroComum} className="min-h-[480px] w-full overflow-y-auto px-4 py-6 bg-white   rounded-b-lg scrollbar-none flex flex-col items-center">
  
            <div className="w-full h-[340px] flex flex-col items-center justify-center">
                    <h2 className="text-[#212529] mb-10 text-2xl">Dados Pessoais</h2>
                    <Input placeholder="Digite seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)}/>
                
                    <Input placeholder="Digite seu email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                
                    <Input placeholder="Digite sua senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    
                    <Input placeholder="Digite seu cpf" type="number" value={cpf} onChange={(e) => setCpf(e.target.value)}/>    
            </div>
  
            <div className="w-full h-[640px] flex flex-col items-center justify-center">
                    <h2 className="text-[#212529] mb-10 text-2xl">Dados Endereço</h2>
                
                    <Input placeholder="Digite seu cep" value={cep} onChange={(e) => setCep(e.target.value)} />
                    <Input placeholder="Digite seu endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    <Input placeholder="Digite seu número" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    <Input placeholder="Digite seu bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                    <Input placeholder="Digite sua cidade" value={localidade} onChange={(e) => setLocalidade(e.target.value)} />
                    <Input placeholder="Digite seu estado" value={uf} onChange={(e) => setUF(e.target.value)} />

            </div>
                {erro && <p className="text-red-500 mb-2">{erro}</p>}
                {sucesso && <p className="text-green-500 mb-2">Cadastro realizado com sucesso!</p>}
            <Botao type="submit" cor="#E63946" corTexto="white" label="Cadastrar" />
        </form>
        </>
    )
}
export default FormularioDadosComum;