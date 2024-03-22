"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import Heading from "@/components/atoms/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  CategoryColumn,
  categoriesColumns,
} from "@/components/molecules/Columns";
import { DataTable } from "@/components/molecules/DataTable";
import ApiList from "@/components/molecules/ApiList";

interface CategoryClientProps {
  data: CategoryColumn[];
}

const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={categoriesColumns} data={data} searchKey="name" />
      <Heading title="API" description="API calls for Categories" />
      <Separator />
      <ApiList entityName="categories" entityIdName="categoryId" />
    </>
  );
};

export default CategoryClient;
