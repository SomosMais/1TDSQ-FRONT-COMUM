import Image from "next/image";
import Link from "next/link";

type ExplorarProps = {
    titulo: string;
    icon: string;
    href?: string;
}

const Explorar: React.FC<ExplorarProps> = ({
    titulo = "Titulo Padrão",
    icon = "/icons/icon_empresa_ativa.png",
    href = ""
}) => {
    return(
        <>
           <Link href={`/pages/${href}`} className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col gap-1 w-[116px] h-[130px] rounded-2xl bg-[#E63946] px-[15px] hover:[#F1FAEE] hover:cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out">

                    <div className="w-full h-[80px] flex justify-center items-center">
                        <Image src={`/icons/${icon}`} alt="" width={60} height={60}/>
                    </div>
                    <div className="w-full h-[80px] flex justify-center items-center">
                        <h5 className="font-semibold text-white text-center">{titulo}</h5>
                    </div>

                </div>
            </Link>
        </>
    )
}
export default Explorar;