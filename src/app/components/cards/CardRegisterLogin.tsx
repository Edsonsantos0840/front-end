import Link from "next/link";

export default function CardRegisterLogin() {
  return (
    <div className="flex  justify-center gap-5 items-center mt-6">
    <p className="text-xl lg:text-base ">Já Possui Cadastro?</p>
    <Link
      href={"/login"}
      className="text-2xl md:text-3xl lg:text-xl text-principal font-black hover:scale-105 hover:underline hover:underline-offset-4 "
    >
      Faça Login.
    </Link>
  </div>
  )
}

export  function CardLoginRegister() {
  return (
    <div className="flex justify-center gap-5 items-center mt-6">
    <p className="text-xl lg:text-base ">Não Possui Cadastro?</p>
    <Link
      href={"/userRegister"}
      className="text-2xl md:text-3xl lg:text-xl text-principal font-black hover:scale-105 hover:underline hover:underline-offset-4 "
    >
      Faça o Cadastro.
    </Link>
  </div>
  )
}
