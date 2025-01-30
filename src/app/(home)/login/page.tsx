import { Metadata } from "next";
import Container from "../../components/containers/Container";
import UserLogin from "../../components/form/UserLogin";

export const metadata: Metadata = {
  title: "Faça seu logim em M&A Marmores e Granitos.",
  description: "Faça seu logim para interagir com os produtos.",
  keywords:
    "Marmores e Granitos, Desing ambiente, Acabamento construção, marmore, granito, pedra onix, pedras ornamentais, pia de marmore, mesa de marmore, escada de marmore, balcao de marmore, soleira de marmore, porcelanato, construtora, construção civil, alvenaria, piso, pisos e revestimentos",
};

export default function Login() {
  return (
    <Container>
      <UserLogin />
    </Container>
  );
}
