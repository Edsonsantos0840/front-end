import { verifySession } from "@/auth/dal";
import ToastifyMsg from "../components/messages/ToastifyMsg";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await verifySession();
  return (
    <>
      {children}
      <ToastifyMsg />
    </>
  );
}
