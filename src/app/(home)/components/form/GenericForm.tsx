"use client";
//componente
import { StaticImport } from "next/dist/shared/lib/get-img-props";
//meus componentes
import CardFormImage from "../cards/CardFormImage";
import CardPreviewImage from "../cards/CardPreviewImage";
//icons
import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlinePerson } from "react-icons/md";

export interface FieldConfig {
  label?: string;
  type: "text" | "email" | "password" | "textarea" | "select" | "hidden";
  name: string;
  placeholder?: string;
  options?: string[]; // Apenas para selects
  value?: string | number;
  defaultValue?: string;
  required?: boolean;
}

interface FormProps {
  img?: string[] | [];
  image1?: string | StaticImport;
  image2?: string | StaticImport;
  image3?: string | StaticImport;
  image4?: string | StaticImport;
  fields: FieldConfig[];
  formTile: string;
  action: (formData: FormData) => void;
  update?: boolean;
}

const icons = {
  password: (
    <RiLockPasswordLine
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      size={20}
    />
  ),
  email: (
    <FiMail
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      size={20}
    />
  ),
  text: (
    <MdOutlinePerson
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      size={20}
    />
  ),
  hidden: null,
};

export default function GenericForm({
  img,
  image1,
  image2,
  image3,
  image4,
  fields,
  formTile,
  action,
  update,
}: FormProps) {
  return (
<form action={action} className="space-y-3 relative z-10 px-4">
  <h1 className="text-3xl lg:text-xl text-center text-principal font-ysabeau font-bold mb-3 lg:mb-2">
    {formTile}
  </h1>

  {fields.map((field) => (
    <div key={field.name} className="flex flex-col space-y-1">
      {field.type === "select" ? (
        <div className="font-medium text-xl lg:text-base text-textos block w-full">
          <span>{field.label}</span>
          <select
            id={field.name}
            name={field.name}
            required={field.required}
            className="pl-10 pr-4 py-2 lg:py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  w-full"
            defaultValue={field.defaultValue} 
          >
            <option value="">--- Selecione ---</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : field.type === "textarea" ? (
        <div className="font-medium text-xl lg:text-base text-textos block w-full">
          <span>{field.label}</span>
          <textarea
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            defaultValue={field.defaultValue} 
            className="border border-gray-300 rounded-md p-1 w-full"
          />
        </div>
      ) : (
        <div className="font-medium text-xl lg:text-base text-textos block w-full">
          <span>{field.label}</span>
          <div className="relative w-full">
            {/* Icone associado ao campo de entrada */}
            <p>{icons[field.type]}</p>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              defaultValue={field.defaultValue} 
              className="w-full pl-10 pr-4 py-2 lg:py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </div>
  ))}

  {/* Upload de Imagens */}
  <fieldset aria-live="polite">
  {update ? (
    <CardPreviewImage
      img={img || []}
      current1={image1 || ""}
      current2={image2}
      current3={image3}
      current4={image4}
    />
  ) : (
    <CardFormImage img={img || []} />
  )}
</fieldset>
  <button
    type="submit"
    className="w-full m-auto bg-principal text-xl lg:text-lg font-bold text-textos2 py-2 lg:py-1 rounded-md hover:bg-principal2"
    aria-label="Enviar Formulário"
  >
    {formTile}
  </button>
</form>

  
  );
}
