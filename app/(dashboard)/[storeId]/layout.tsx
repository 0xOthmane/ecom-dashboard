import { getUserAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import Navbar from "@/components/organisms/Navbar";
export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const user = await getUserAuth();
  if (!user) redirect("/login");
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
      userId: user.id!,
    },
  });
  if (!store) redirect("/");
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
