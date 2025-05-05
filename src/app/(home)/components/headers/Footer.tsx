//meus componentes
import CardRedesSociais from "../cards/CardRedesSociais";
//componentes
import Link from "next/link";
import { FooterFields } from "../fields/FooterFields";

export default function Footer() {
  return (
    <footer className="grid grid-cols-3 justify-content justify-items-center align-middle bg-principal text-textos2 w-full py-2">
      <nav
        aria-label="Redes sociais"
        className="col-span-3 md:col-span-1 md:justify-self-end"
      >
        <h3 className="text-xl font-black">M&A Marmoraria</h3>
        <p>Oferece atendimento personalizado</p>
        <h4 className="text-lg font-semibold">Nossas Redes Sociais:</h4>
        <CardRedesSociais
          iconColor="text-[#fff]"
          iconSize="text-4xl lg:text-3xl gap-10 lg:gap-5  "
        />
      </nav>
      <div className="w-4 h-32 rounded-sm bg-textos2 mb-2 justify-self-center hidden md:grid"></div>
      <address className="col-span-3 md:col-span-1  m-auto md:justify-self-start space-y-2 py-2 font-ysabeau">
        {FooterFields.map((item, index) => (
          <Link
            key={index + item.href}
            href="mailto:contatomamarmoraria@gmail.com"
            className="flex items-center gap-3 font-ysabeau"
            rel="noopener noreferrer"
            target="_blank"
          >
            {item.icon}
            <strong>{item.text}</strong>
            {item.text2}
          </Link>
        ))}
      </address>
      <div className=" col-span-3 border-t-2 w-full  ">
        <h3 className="text-base font-ysabeau text-center">
          {" "}
          &copy; {new Date().getFullYear()} M&A Marmores. Todos os direitos
          reservados.
        </h3>
        <p className="text-center">
          Desenvolvido por:{" "}
          <Link
            href={"https://protifolio-eta.vercel.app/"}
            className="ml-2 font-bold hover:underline hover:text-[#f7e92f]"
          >
            EPS SOLUÇÕES.
          </Link>
        </p>
      </div>
    </footer>
  );
}
