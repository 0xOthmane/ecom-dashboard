import { getUserAuth } from "@/lib/auth";
import db from "@/lib/db";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserAuth();
  if (!user) {
    redirect("/login");
  }
  const billboard = await db.billboard.findFirst()
  const store = await db.store.findFirst({
    where: {
      userId: user.id!,
    },
  });
  if (!store) redirect(`/${store!.id}`);

  return <>{children}</>;
}
