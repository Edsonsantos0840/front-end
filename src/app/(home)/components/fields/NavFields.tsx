import { GiPresent } from "react-icons/gi";
import { IoIosPerson, IoMdPersonAdd } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";

interface NavFieldsProps {
    href: string;
    text: string;
    icon?: React.ReactNode;
    }

export const NavFields: NavFieldsProps[] = [
    {
        href: "/bathrooms",
        text: "Banheiros",
    },
    {
        href: "/kitchen",
        text: "Cozinhas",
    },
    {
        href: "/steps",
        text: "Escadas",
    },
    {
        href: "/outdoor",
        text: "Exteriores",
    },
]
export const NavBarFields: NavFieldsProps[] = [
    {
        href: "/home",
        text: "Dashboard",
        icon: <MdDashboardCustomize size={30} color="var(--corFundo2)" />,
    },
    {
        href: "/user",
        text: "Usuários",
        icon: <IoIosPerson size={30} color="var(--corFundo2)" />,
    },
    {
        href: "/product",
        text: "Produtos",
        icon: <GiPresent size={30} color="var(--corFundo2)" />,
    },
    {
        href: "/productRegister",
        text: "cadastro",
        icon: <IoBagAdd size={30} color="var(--corFundo2)" />,  
    },
    {
        href: "/userRegister",
        text: "cadastro",
        icon: <IoMdPersonAdd size={30} color="var(--corFundo2)" />, 
    },
]
