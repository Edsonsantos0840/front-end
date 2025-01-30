import { Metadata } from "next";
import Container from "../../components/containers/Container";
import UserRegister from "../../components/form/UserRegister";

export const metadata: Metadata = {
  title: "Faça seu Registor em M&A Marmores e Granitos.",
  description: "Crie seu usuário para interagir com os produtos.",
  keywords:
    "Marmores e Granitos, Desing ambiente, Acabamento construção, marmore, granito, pedra onix, pedras ornamentais, pia de marmore, mesa de marmore, escada de marmore, balcao de marmore, soleira de marmore, porcelanato, construtora, construção civil, alvenaria, piso, pisos e revestimentos",
};

export default function Register() {
  return (
    <Container>
      <UserRegister />
    </Container>
  );
}
