import { UserSchema } from "@/schemas";
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
  const session = await req.json();
  const result = UserSchema.safeParse(session);

  if (!result.success) {
    redirect("/");
  }

  return {
    user: result.data,
    isAuth: true,
  };
});
