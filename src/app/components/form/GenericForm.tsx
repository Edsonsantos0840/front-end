"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CardFormImage from "../cards/CardFormImage";
import CardPreviewImage from "../cards/CardPreviewImage";
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
    <form action={action} className="space-y-3 relative z-10 px-2">
      <h1 className="text-4xl lg:text-xl text-center text-principal font-ysabeau  font-bold mb-3 ">
        {formTile}
      </h1>

      {fields.map((field) => (
        <div key={field.name} className="flex flex-col space-y-1">
          {field.type === "select" ? (
            <label className="font-medium text-xl lg:text-base text-textos block w-full">
              {field.label}
              <select
                id={field.name}
                required={field.required}
                className="pl-10 pr-4 py-4 lg:py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center w-full"
                name={field.name}
              >
                <option value="">--- Selecione ---</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ) : field.type === "textarea" ? (
            <label className="font-medium text-xl lg:text-base text-textos block w-full">
              {field.label}
              <textarea
                id={field.name}
                placeholder={field.placeholder}
                required={field.required}
                className="border border-gray-300 rounded-md p-1 w-full"
                name={field.name}
              />
            </label>
          ) : (
            <label className="font-medium text-xl lg:text-base text-textos block w-full">
              {field.label}
              <div className="relative w-full ">
                <p>{icons[field.type]}</p>

                <input
                  id={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full pl-10 pr-4 py-4 lg:py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name={field.name}
                  value={field.value}
                />
              </div>
            </label>
          )}
        </div>
      ))}
      {/* Upload de Imagens */}
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
      <button
        type="submit"
        className="w-full m-auto bg-principal text-2xl lg:text-lg font-bold text-textos2 py-4 lg:py-1 rounded-md hover:bg-principal2"
      >
        {formTile}
      </button>
    </form>
  );
}
