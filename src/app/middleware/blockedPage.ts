import { UserSchema } from "@/schemas";
import { cookies } from "next/headers";

export async function Block() {
  const url = `${process.env.BASE_URL}/user`;
  const token = (await cookies()).get("MA_MARMORE")?.value;

  const req = await fetch(url, {
    headers: {
      Authorization: ` Bearer ${token} `,
    },
  });
  const session = await req.json();
  const result = UserSchema.safeParse(session);

  return {
    user: result,
  };
}
