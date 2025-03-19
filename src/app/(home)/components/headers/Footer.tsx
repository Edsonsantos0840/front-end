//icon
import { MdEmail } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
//meus componentes
import CardRedesSociais from "../cards/CardRedesSociais";
//componentes
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid grid-cols-3 justify-content justify-items-center align-middle bg-principal text-textos2 w-full py-2">
      <nav aria-label="Redes sociais" className="col-span-3 md:col-span-1 md:justify-self-end">
        <h3 className="text-xl font-black">M&A Marmoraria</h3>
        <p>Oferece atendimento personalizado</p>
        <h4 className="text-lg font-semibold">Nossas Redes Sociais:</h4>
        <CardRedesSociais
          iconColor="text-[#fff]"
          iconSize="text-4xl lg:text-3xl gap-10 lg:gap-5  "
        />
      </nav>
      <div className="w-4 h-32 rounded-sm bg-textos2 mb-2 justify-self-center hidden md:grid">

      </div>
      <address className="col-span-3 md:col-span-1  m-auto md:justify-self-start space-y-2 py-2 font-ysabeau">
        <Link href="mailto:contatomamarmoraria@gmail.com" className="flex items-center gap-3 font-ysabeau">
        <MdEmail size={24} />
        <strong>Email:</strong>contatomamarmoraria@gmail.com
        </Link>
        <Link href="tel:+5511943208221" className="flex items-center gap-3 font-ysabeau"> <FaPhoneAlt size={24} />
          <strong>Fone:</strong>(11) 94320-8221
        </Link>
        <Link href="https://api.whatsapp.com/send/?phone=5511943208221&text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.&type=phone_number&app_absent=0" target="_blank" className="flex items-center gap-3 font-ysabeau"> <FaWhatsapp size={26} />
          <strong>Whatsapp:</strong>(11) 94320-8221
        </Link>
        <Link href={'https://www.google.com/maps/place/Rua+Natal+de+Queiroz,+112+-+Trememb%C3%A9,+S%C3%A3o+Paulo+-+SP,+02366-150/@-23.4396527,-46.5886587,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef4217e597a0d:0x2facf4eee159ed0f!8m2!3d-23.4396527!4d-46.5886587!16s%2Fg%2F11fzwr8p1n?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoASAFQAw%3D%3D'} className="flex items-center gap-3 font-ysabeau"><FaMapLocation size={26} />
        <strong>Endereço:</strong>Rua Natal de Queiroz N. 112 São Paulo.</Link>
      </address>
      <div className=" col-span-3 border-t-2 w-full  ">
      <h3 className="text-base font-ysabeau text-center"> &copy; {new Date().getFullYear()} M&A Marmores. Todos os direitos reservados.</h3>
        <p className="text-center">
          Desenvolvido por: <Link href={'https://portifolio-beta-gules.vercel.app/'} className="ml-2 font-bold hover:underline hover:text-[#f7e92f]">EPS SOLUÇÕES.</Link>
        </p>
      </div>
    </footer>
  );
}
