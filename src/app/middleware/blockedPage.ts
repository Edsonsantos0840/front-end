
import { cookies } from "next/headers";
import { UserProps } from "../types/user";

export async function Block() {
  const url = `${process.env.BASE_URL}/user`;
  // busca o token do usuário logado
  const token = (await cookies()).get("MA_MARMORE")?.value;

  const req = await fetch(url, {
    headers: {
      Authorization: ` Bearer ${token} `,
    },
  });
  const session: UserProps = await req.json();


  return {
    user: session,
  };
}
