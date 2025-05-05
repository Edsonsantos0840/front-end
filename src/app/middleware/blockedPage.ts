
// import { cookies } from "next/headers";
// import { UserProps } from "../types/user";

// export async function Block() {
//   const url = `${process.env.BASE_URL}/user`;
//   // busca o token do usuário logado
//   const token = (await cookies()).get("MA_MARMORE")?.value;
//   const req = await fetch(url, {
//     headers: {
//       Authorization: ` Bearer ${token} `,
//     },
//   });
//   const session: UserProps = await req.json();


//   return {
//     user: session,
//   };
// }
import { cookies } from "next/headers";
import { UserProps } from "../types/user";

export async function Block() {
  const url = `${process.env.BASE_URL}/user`;

  // busca o token do usuário logado
  const token = (await cookies()).get("MA_MARMORE")?.value;

  // Se não houver token, retorna um usuário vazio
  if (!token) {
    console.warn("Token não encontrado nos cookies.");
    return { user: {} as UserProps };
  }

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Removi os espaços desnecessários
      },
      cache: "no-store", // evita pegar resposta cacheada
    });

    const contentType = res.headers.get("content-type");

    // Se a resposta não for OK ou não for JSON, trata o erro
    if (!res.ok || !contentType?.includes("application/json")) {
      const text = await res.text(); // Pega a resposta para debug se não for JSON
      console.error("Resposta inválida da API /user:", {
        status: res.status,
        texto: text.slice(0, 200),
      });
      return { user: {} as UserProps };
    }

    const session: UserProps = await res.json();
    return { user: session };

  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return { user: {} as UserProps };
  }
}
