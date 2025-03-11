export default function Footer() {
  return (
    <footer className="grid grid-cols-3 justify-content bg-principal text-textos2 w-full">
      <nav aria-label="Redes sociais" className="col-span-3 md:col-span-1 ">
        <ul className="flex md:flex-col justify-center items-center gap-4 " >
          <li>
            <a href="https://twitter.com/seuperfil" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://facebook.com/seuperfil" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://instagram.com/seuperfil" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
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
      <div className=" col-span-3 m-auto ">
      <hr  className=" h-2 w-full"/>
        <h4>Footer</h4>
        <p>Desenvolvido por: <span>EPS SOLUÇÕES.</span></p>
      </div>
    </footer>
  );
}
