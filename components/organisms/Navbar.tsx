import { MainNav } from "@/components/molecules/MainNav";
import { Button } from "@/components/ui/button";
import StoreSwitcher from "@/components/molecules/StoreSwitcher";

import { getUserAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import db from "@/lib/db";

const NavBar = async () => {
  const user = await getUserAuth();
  if (!user) redirect("/login");
  const stores = await db.store.findMany({
    where: { userId: user.id },
  });
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Button size="icon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
