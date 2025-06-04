import Image from "next/image";
import React, {FC} from "react";

type ContadorProps = {
    id?: number;
    titulo: string;
    quantidade: number;
    icon: string;
}

const Contador: React.FC<ContadorProps> = ({
    id,
    titulo = "Título",
    quantidade = 0,
    icon
}) => {
    return(
        <>
            <div className="w-[180px] h-[70px] bg-[#E63946] rounded-2xl flex flex-col justify-center items-center">
            <div className="h-[30px] flex items-center gap-2">
                <Image src={`/icons/${icon}`} alt="Icon pessoas ajudadas" width={25} height={25}></Image>
                <h3 className="text-white">{titulo}</h3>
            </div>
            <span className="text-2xl font-bold text-white">{quantidade}</span>
          </div>
        </>
    )
}

export default Contador;