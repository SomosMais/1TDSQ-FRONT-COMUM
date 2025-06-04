'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [fade, setFade] = useState("opacity-100");

  useEffect(() => {
    // Inicia o fade-out depois de 2.5s
    const fadeTimer = setTimeout(() => {
      setFade("opacity-0 transition-opacity duration-500");
    }, 2500);

    // Redireciona após o fade (3s total)
    const redirectTimer = setTimeout(() => {
      router.push("/pages/Inicio");
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className={`transition-opacity duration-500 ease-in-out ${fade}`}>
      <div className="w-full h-[400px] rounded-t-lg">
        <Image
          src={"/image/onda_abertura.png"}
          alt="Logo"
          width={450}
          height={400}
          className="rounded-t-lg"
        />
      </div>

      <div className="w-full h-[380px] rounded-b-lg flex items-center justify-center">
        <Image
          src={"/image/logo.png"}
          alt="Logo"
          width={300}
          height={300}
          className="-translate-y-[140px]"
        />
      </div>
    </div>
  );
}
