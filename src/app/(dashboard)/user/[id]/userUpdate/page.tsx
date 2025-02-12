
import Link from "next/link";

import { MdImageSearch } from "react-icons/md";
import Container from "@/app/components/containers/Container";
import { handleUpdateUser } from "@/app/functions/handleSubmit/handleUpdateUser";
import { UserProps } from "@/app/types/user";
import Image from "next/image";


async function UserUpdate({ params }: { params: { id: string } }) {
    const {id} = await params
    const url = `${process.env.BASE_URL}/users/${id}`;

   async function getUserWithId() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          console.log(` Houve um erro ${res.status} ao buscar os dados`);
        }
        const json = await res.json();
        return json;
      } catch (error) {
        console.log(`${error} Houve este erro ao buscar os dados`);
      }
    }
    const user: UserProps = await getUserWithId();

  return (
    <Container>
        <h1 className="text-2xl text-center font-bold mb-6">Editar</h1>
      <form action={handleUpdateUser} className="flex flex-col p-8 bg-white rounded-md shadow-md space-y-2">
      <input type="hidden" name="_id"  />
       <label className="font-medium">
         Name:
        <input 
          type="name" 
          name="name" 
          placeholder="Digite seu Nome"
          defaultValue={user.name}
          className="border border-gray-300 rounded-md p-1 w-full"
        />
       </label>
       <label className="font-medium">
         E-mail:
        <input 
          type="email" 
          name="email" 
          placeholder="Digite seu e-mail"
          defaultValue={user.email}
          className="border border-gray-300 rounded-md p-1 w-full"
        />
       </label>
       <label
         className="cursor-pointer border-dashed border-[1px] border-[#b91c1c]/15 alinha6 text-sm my-5 hover:scale-105 "
       >
        <input
          type="file"
          name={`image`}
          className="hidden my-8"
        />
         {
           user.image ? 
            <Image src={user.image} alt={user.name} width={170} height={230}/> :

            <MdImageSearch size={100} color="#b91c1c54" />
         }
         
       </label>
       <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
      >
        Enviar
      </button>

      </form>
      <div className="flex justify-center gap-5 items-center mt-6">
        <p className=" ">Já Possui Cadastro?</p>
        <Link
          href={"/login"}
          className="text-2xl md:text-3xl lg:text-xl text-[var(--corTextos)] hover:scale-105 hover:underline hover:underline-offset-4 "
        >
          Faça Login.
        </Link>
      </div>
    </Container>
  );
}
export default UserUpdate;
