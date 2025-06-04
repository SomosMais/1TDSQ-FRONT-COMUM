import React,{FC} from "react";

type ButtonProps = {
    label: string;
    onClick?: () => void;
    cor ?: string;
    corTexto ?: string;
    type?: "button" | "submit" | "reset";
};

const Botao: React.FC<ButtonProps> = (
    { label, onClick, cor = "#E63946", corTexto = "text-white",
        type = "button"
    }
)=> {
    return(
        <>
            <button className="w-[270px] h-[60px] py-2 px-4 rounded-full text-3xl border-1 border-[#E63946] cursor-pointer"
                style={{ backgroundColor: cor, color: corTexto }}
                onClick={onClick} type={type}>
                {label}
            </button>
        </>
    )
}

export default Botao;