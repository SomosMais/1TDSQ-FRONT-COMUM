// app/utils/withAuth.tsx
'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function ProtectedRoute(props: P) {
    const router = useRouter();
    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
      const email = localStorage.getItem("email");
      if (!email) {
        router.push("/pages/LoginComum");
      } else {
        setAutenticado(true);
      }
    }, [router]);

    if (!autenticado) return null; // Evita renderização prematura

    return <WrappedComponent {...props} />;
  };
}
