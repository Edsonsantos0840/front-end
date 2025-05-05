import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface FooterFieldsProps {
    href: string;
    text: string;
    text2?: string;
    icon?: React.ReactNode;
    }

export const FooterFields: FooterFieldsProps[] = [
    {
        href: "mailto:contatomamarmoraria@gmail.com",
        text: "Email:",
        text2: "contatomamarmoraria@gmail.com",
        icon: <MdEmail size={24} />,
    },
    {
        href: "tel:+5511943208221",
        text: "Fone:",
        text2: "(11) 94320-8221",
        icon: <FaPhoneAlt size={24} />,
    },
    {
        href: "https://api.whatsapp.com/send/?phone=5511943208221&text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.&type=phone_number&app_absent=0",
        text: "Whatsapp:",
        text2: "(11) 94320-8221",
        icon: <FaWhatsapp size={26} />,
    },
    {
        href: 'https://www.google.com/maps/place/Rua+Natal+de+Queiroz,+112+-+Trememb%C3%A9,+S%C3%A3o+Paulo+-+SP,+02366-150/@-23.4396527,-46.5886587,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef4217e597a0d:0x2facf4eee159ed0f!8m2!3d-23.4396527!4d-46.5886587!16s%2Fg%2F11fzwr8p1n?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoASAFQAw%3D%3D',
        text: "Endereço:",
        text2: "Rua Natal de Queiroz N. 112 São Paulo.",
        icon: <FaMapLocation size={26} />,
    },
]
