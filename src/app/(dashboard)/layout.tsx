import { verifySession } from "@/auth/dal";
import ToastifyMsg from "../components/messages/ToastifyMsg";
import Header from "../components/headers/Header";
import NavBar from "../components/headers/NavBar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await verifySession();
  return (
    <>
      <NavBar/>
      <Header />
      {children}
      <ToastifyMsg />
    </>
  );
}
