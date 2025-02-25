import { Ysabeau} from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import ToastifyMsg from "./components/messages/ToastifyMsg";


const Ysabea = Ysabeau({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M&A Marmores e Granitos.",
  description:
    "M&A Marmores e Granitos Tem o Melhor Desing e o Melhor Acabamento Para Você.",
  keywords:
    "Marmores e Granitos, Desing ambiente, Acabamento construção, marmore, granito, pedra onix, pedras ornamentais, pia de marmore, mesa de marmore, escada de marmore, balcao de marmore, soleira de marmore, porcelanato, construtora, construção civil, alvenaria, piso, pisos e revestimentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={` ${Ysabea} antialiased`}>
        {children}
        <ToastifyMsg />
      </body>
    </html>
  );
}
