'use client';
import { useRouter } from "next/navigation";
import Botao from "@/app/component/Botao/Botao";
import Image from "next/image";
const Inicio = () => {
    const router = useRouter();

    return(
        <>
            <div className="w-full h-[500px]  flex">
                <div className="w-[200px] h-[500px]  flex items-center justify-center">
                    <Image src={"/image/logo_inicio.png"} alt="" width={500} height={200}/>
                </div>
                <div className="w-[250px] h-[500px] flex justify-end">
                    <Image src={"/image/onda_inicio.png"} alt="" width={150} height={100} className="rounded-tr-lg"/>
                </div>
            </div>

            <div className="w-full h-[300px]  flex flex-col justify-center items-center">
                <Botao cor="white" label="Entrar" corTexto="#E63946" onClick={() => router.push("/pages/LoginComum")}/>
                <br/>
                <Botao cor="#E63946" label="Cadastrar" corTexto="white"  onClick={() => router.push("/pages/FormularioDadosComum")} />
            </div>
        </>
    );
}

export default Inicio;