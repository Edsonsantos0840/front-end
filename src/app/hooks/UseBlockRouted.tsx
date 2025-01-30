// 'use client'
// import UseAuthorization from "@/app/hooks/UseAuthorization";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function UseBlockRouted(props: {url: string}) {
//   const logado = localStorage.getItem("authToken");
//   const router = useRouter();
//   const { user } = UseAuthorization();

//   if (logado === null) {
//     router.push("/");
//   }

//   useEffect(() => {
  
//       if (user?.tipo.includes("administrador")  ) {
//         router.push(props.url);
//       } else {
//         router.push("/");
//       }
   
//   }, [props.url, router, user]);
//   return null
// }
