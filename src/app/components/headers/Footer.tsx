import CardRedesSociais from "../cards/CardRedesSociais";

export default function Footer() {
  return (
    <footer className="grid grid-cols-3 justify-content bg-principal text-textos2 w-full">
      <nav aria-label="Redes sociais" className="col-span-3 md:col-span-1 ">
       <CardRedesSociais iconColor="text-[#fff]" iconSize="text-4xl lg:text-xl gap-10 lg:gap-5 justify-start md:flex-col"/>
      </nav>
      <address className="col-span-3 md:col-span-1 justify-self m-auto">
        <p>Entre em contato:</p>
        <p>
          Email: <a href="mailto:contato@exemplo.com">contato@exemplo.com</a>
        </p>
        <p>
          Telefone: <a href="tel:+5511999999999">(11) 99999-9999</a>
        </p>
        <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
        
      </address>
      <div className=" col-span-3 border-t-2 w-full  ">
      
        <h4 className="text-center">Footer</h4>
        <p className="text-center">Desenvolvido por: <span>EPS SOLUÇÕES.</span></p>
      </div>
    </footer>
  );
}
