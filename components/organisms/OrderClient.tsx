"use client";

import Heading from "@/components/atoms/Heading";
import { OrderColumn, orderColumns } from "@/components/molecules/Columns";
import { DataTable } from "@/components/molecules/DataTable";
import { Separator } from "@/components/ui/separator";

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage orders for your store"
        />
      </div>
      <Separator />
      <DataTable columns={orderColumns} data={data} searchKey="products" />
    </>
  );
};

export default OrderClient;
