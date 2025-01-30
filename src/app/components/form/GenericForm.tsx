"use client"

// import UploadImages from "../uploads/UploadImages";

// import UploadImages from "../uploads/UploadImages";

export interface FieldConfig {
  label: string;
  type: "text" | "email" | "password" | "textarea" | "select";
  name: string;
  placeholder?: string;
  options?: string[]; // Apenas para selects
  value?: string | number;
  required?: boolean;
}

interface FormProps {
  fields: FieldConfig[];
  qtdImages: number;
  formTile:string;
  action: (formData: FormData) => void
}

export default function GenericForm( { fields, qtdImages, formTile, action}: FormProps){

  return (
    <form
      action={action}
  
      className="p-8 bg-white rounded-md shadow-md space-y-2"
    >
      <h1 className="text-2xl text-center font-bold mb-6">{formTile}</h1>
    
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col space-y-1">
          <label htmlFor={field.name} className="font-medium">
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
            />
          )}
        </div>
      ))}
        <div className="alinha5 gap-6 ">
          {/* <UploadImages qtdImages={qtdImages}/> */}
        </div>
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
      >
        Enviar
      </button>
    </form>
  );
};


