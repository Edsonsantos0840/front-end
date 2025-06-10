import { ProdutoProps } from "@/app/types/produtoTypes";
import { FieldConfig } from "../form/GenericForm";
import { UserProps } from "@/app/types/user";
const category = ["banheiro", "cozinha", "escadas", "exteriores"];

const fieldsUser: FieldConfig[] = [
  {
    label: "Nome",
    type: "text",
    name: "name",
    placeholder: "Digite seu Nome",
  },
  {
    label: "E-mail",
    type: "email",
    name: "email",
    placeholder: "Digite seu e-mail",
  },
  {
    label: "Senha",
    type: "password",
    name: "password",
    placeholder: "Digite sua senha",
  },
  {
    label: "Confirmar:",
    type: "password",
    name: "confirmPass",
    placeholder: "Confirme a Senha",
  },
];

const fieldsLogin: FieldConfig[] = [
  {
    label: "E-mail",
    type: "email",
    name: "email",
    placeholder: "Digite seu e-mail",
  },
  {
    label: "Senha",
    type: "password",
    name: "password",
    placeholder: "Digite sua senha",
  },
];

export const getFieldsUpdateProduct = ( updateProduct:ProdutoProps): FieldConfig[] => [
  {
    type: "hidden",
    name: "_id",
    defaultValue: updateProduct._id,
  },
  {
    label: "Título",
    type: "text",
    name: "title",
    placeholder: "Digite o título do produto",
    defaultValue: updateProduct.title                            
  },
  {
    label: "Categoria",
    type: "select",
    name: "category",
    options: category,
    defaultValue: updateProduct.category
  },
  {
    label: "Descrição",
    type: "text",
    name: "description",
    placeholder: "Descreva o produto",
    defaultValue: updateProduct.description
  },
];
export const getFieldsUpdateUser = ( user: UserProps): FieldConfig[] => [
  {
    type: "hidden",
    name: "_id",
    defaultValue: user._id,
    required: false,
  },
  {
    label: "Nome",
    type: "text",
    name: "name",
    placeholder: "Digite seu Nome",
    required: false,
    defaultValue: user.name
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Digite seu e-mail",
    required: false,
    defaultValue: user.email
  },
];

const fieldsProducts: FieldConfig[] = [
  {
    label: "Título",
    type: "text",
    name: "title",
    placeholder: "Digite o título do produto",
    required: false,
  },
  {
    label: "Categoria",
    type: "select",
    name: "category",
    options: category,
    required: false,
  },
  {
    label: "Descrição",
    type: "text",
    name: "description",
    placeholder: "Descreva o produto",
    required: false,
  },
];

export { fieldsUser, fieldsLogin, fieldsProducts };
