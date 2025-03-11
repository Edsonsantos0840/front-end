"use server"
import { cookies } from "next/headers";
import { validateLogin } from "../validate/validateLogin";
import { redirect } from "next/navigation";

type ActionStateType = {
  message: string[];
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

  const {message} = validateLogin(loginData);
  
  if (message.length > 0) {
    return {
      message: message,
      success: "",
    };
  } 

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: loginData.email,
      password: loginData.password,
    }),
  });

  const json = await req.json();

  if (!req.ok) {
    return {
      message: ["Erro ao logar o usuário. Tente novamente!"],
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
 redirect('/')
}

