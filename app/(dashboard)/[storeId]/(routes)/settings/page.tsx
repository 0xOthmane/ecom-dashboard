import { getUserAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import SettingsForm from "@/components/molecules/SettingsForm";

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}

const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
  const user = await getUserAuth();
  if (!user) redirect("/login");
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
      userId: user.id,
    },
  });
  if (!store) redirect("/");
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store}/>
      </div>
    </div>
  );
};

export default SettingsPage;
