import { z } from "zod"; 

export const LoginSchema = z.object({
    email: z.string().min(8, {message: 'O e-mail é obrigatório!'}).email({message: 'O e-mail não é válido!'}),
    password: z.string().min(8, {message: 'A senha é obrigatório!'}), 
})

export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: "O nome é obrigatório!" }),
    email: z.string()
      .min(8, { message: "O e-mail é obrigatório!" })
      .email({ message: "O e-mail não é válido!" }),
    password: z.string().min(8, { message: "A senha é obrigatória!" }),
    ConfirPass: z.string().optional(), // Campo opcional
    tipo: z.string().optional(),
    image: z.string().optional(),
  })
  .refine(
    (data) => !data.ConfirPass || data.password === data.ConfirPass, // Valida apenas se ConfirPass for preenchido
    {
      message: "Os campos senha e confirmação devem ser iguais!",
      path: ["ConfirPass"],
    }
  );

  export const UserSchema = z.object({
    _id: z.string(),
    name: z.string(),
    email: z.string().email(),
    tipo: z.string().optional(),
    image: z.string().optional(),
})  
export const ProductSchema = z.object({
  _id: z.string(), // ID do produto no MongoDB
  title: z.string().min(1, { message: "O título é obrigatório" }),
  category: z.string().min(1, { message: "A categoria é obrigatória" }),
  description: z.string().min(1, { message: "A descrição é obrigatória" }),
  image1: z.string().optional(), // URL da primeira imagem (opcional)
  image2: z.string().optional(), // URL da segunda imagem (opcional)
  image3: z.string().optional(), // URL da terceira imagem (opcional)
  image4: z.string().optional(), // URL da quarta imagem (opcional)
  comments: z.array(z.string()).optional(), // Lista de IDs de comentários (opcional)
  likes: z.array(z.string()).optional(), // Lista de IDs de likes (opcional)
  createdAt: z.string().optional(), // Data de criação (ISO 8601, opcional)
  updatedAt: z.string().optional(), // Data de atualização (ISO 8601, opcional)
});


export const UploadImageSchema = z.object({
  image: z.string().optional(),
})

export const CommentsSchema = z.array(
  z.object({
    _id: z.string(),
    comments: z.string(),
    user: z.string(),
    produto: z.string(),
    createdAt: z.string().optional(), // Data de criação (ISO 8601, opcional)
    updatedAt: z.string().optional(), // Data de atualização (ISO 8601, opcional)
  })
);

export const SuccessSchema = z.string()

export const ErrorResSchema = z.object({
    error: z.string()
})

export type User = z.infer<typeof UserSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type Comments = z.infer<typeof ProductSchema>;