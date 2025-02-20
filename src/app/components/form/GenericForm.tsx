"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CardFormImage from "../cards/CardFormImage";
import CardPreviewImage from "../cards/CardPreviewImage";

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
    <form action={action} className="space-y-2">
      <h1 className="text-2xl text-center font-bold mb-6">{formTile}</h1>

      {fields.map((field) => (
        <div key={field.name} className="flex flex-col space-y-1">
          <label  className="font-medium">
            {field.label}
          </label>
          {field.type === "select" ? (
            <select
              id={field.name}
              required={field.required}
              className="border border-gray-300 rounded-md p-1 text-center"
              name={field.name}
            >
              <option value="">--- Selecione ---</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              id={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className="border border-gray-300 rounded-md p-1"
              name={field.name}
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              className="border border-gray-300 rounded-md p-1"
              name={field.name}
              value={field.value}
            />
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
        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
      >
        {formTile}
      </button>
    </form>
  );
}
