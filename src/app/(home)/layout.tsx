import ToastifyMsg from "./components/messages/ToastifyMsg";
import Header from "./components/headers/Header";
import NavBar from "./components/headers/NavBar";
import Footer from "./components/headers/Footer";

export default function PublicViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <Header />
      {children}
      <Footer />
      <ToastifyMsg />
    </>
  );
}
