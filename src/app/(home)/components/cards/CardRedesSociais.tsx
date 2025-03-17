//icons
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
//componentes
import Link from "next/link";

export default function CardRedesSociais({iconColor, iconSize}: {iconColor: string, iconSize: string}) {
  return (
    <nav className={`flex md:items-start ${iconColor}  ${iconSize} 
    p-2`} aria-label="Redes Sociais">
      <Link
        rel="prefetch"
        href="https://www.facebook.com/people/Marcelo-Barbosa/pfbid0hbC53d1Utmcwgi8poESkjhgvputBAVo68wZZrrp1qAc4pVLiin9qN85y3W9gd9jCl/"
        target="_blank"
        className="hover:scale-125"
      >
        <BsFacebook />
      </Link>
      <Link
        rel="prefetch"
        href="https://www.instagram.com/ma.marmoresegranito/?igshid=ZjE2NGZiNDQ%3D"
        target="_blank"
        className="hover:scale-125"
      >
        <BsInstagram />
      </Link>
      <Link
        href="https://api.whatsapp.com/send/?phone=5511943208221&text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.&type=phone_number&app_absent=0"
        target="_blank"
        className="hover:scale-125"
      >
        <BsWhatsapp />
      </Link>
      <Link
        rel="prefetch"
        href="https://www.google.com/maps/place/Rua+Natal+de+Queiroz,+112+-+Trememb%C3%A9,+S%C3%A3o+Paulo+-+SP,+02366-150/@-23.4396527,-46.5886587,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef4217e597a0d:0x2facf4eee159ed0f!8m2!3d-23.4396527!4d-46.5886587!16s%2Fg%2F11fzwr8p1n?entry=ttu"
        target="_blank"
        className="hover:scale-125"
      >
        <FaLocationDot />
      </Link>
    </nav>
  );
}
