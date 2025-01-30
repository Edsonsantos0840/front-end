import ToastifyMsg from "../components/messages/ToastifyMsg";
import Header from "../components/headers/Header";
import NavBar from "../components/headers/NavBar";

export default function PublicViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar/>
      <Header />
      {children}
      <ToastifyMsg />
    </>
  );
}
