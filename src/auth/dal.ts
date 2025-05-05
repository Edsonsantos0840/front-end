//meus componentes
import { UserProps } from "@/app/types/user";
//componentes
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

export const verifySession = cache(async () => {
  const url = `${process.env.BASE_URL}/user`;
  const token = (await cookies()).get("MA_MARMORE")?.value;
  if (token === "") {
    redirect("/");
  }

  const req = await fetch(url, {
    headers: {
      Authorization: ` Bearer ${token} `,
    },
  });
  const session: UserProps = await req.json();

  return {
    user: session,
    isAuth: true,
  };
});
// meus componentes
// import { UserProps } from "@/app/types/user";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { cache } from "react";

// export const verifySession = cache(async () => {
//   const url = `${process.env.BASE_URL}/user`;
//   const token = (await cookies()).get("MA_MARMORE")?.value;

//   if (!token) {
//     console.warn("Token ausente. Redirecionando...");
//     redirect("/");
//   }

//   try {
//     const res = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       cache: "no-store",
//     });

//     const contentType = res.headers.get("content-type");

//     if (!res.ok || !contentType?.includes("application/json")) {
//       const text = await res.text(); // evita tentar .json() em HTML
//       console.error("Erro ao verificar sessão:", {
//         status: res.status,
//         resposta: text.slice(0, 200),
//       });
//       redirect("/"); // impede o restante do código
//     }

//     const session: UserProps = await res.json();

//     return {
//       user: session,
//       isAuth: true,
//     };
//   } catch (error) {
//     console.error("Erro inesperado ao verificar sessão:", error);
//     redirect("/");
//   }
// });
