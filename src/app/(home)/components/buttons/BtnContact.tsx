import Link from "next/link";

export default function BtnContact({classEdit}: {classEdit?: string}) {
  return (
    <Link 
    href={'https://api.whatsapp.com/send/?phone=5511943208221&text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.&type=phone_number&app_absent=0'} 
    target="_blank"
    className={`bg-principal text-textos2 font-semibold py-2  rounded-md hover:scale-105 hover:bg-principal2 text-center ${classEdit}`}
  >
   Peça um orçamento
 </Link>
  )
}
