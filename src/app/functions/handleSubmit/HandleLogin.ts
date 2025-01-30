"use server";
import { ErrorResSchema, LoginSchema } from "@/schemas";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ActionStateType = {
  errors: string[];
  success: string;
};

export async function LoginSubmit(
  prevState: ActionStateType,
  formData: FormData
) {
  const url = `${process.env.BASE_URL}/auth/login`;

  const loginData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const login = LoginSchema.safeParse(loginData);

  if (!login.success) {
    const errors = login.error.errors.map((err) => err.message);

    return {
      errors,
      success: "",
    };
  }

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: login.data.email,
      password: login.data.password,
    }),
  });

  const json = await req.json();

  if (!req.ok) {
    const { error } = ErrorResSchema.parse(json);

    return {
      errors: [error],
      success: "",
    };
  }

  // Valida o token recebido, caso necessário

  (await cookies()).set({
    name: "MA_MARMORE",
    value: json.token,
    httpOnly: false,
    path: "/",
  });

  redirect("/");
}
