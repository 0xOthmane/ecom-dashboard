"use client";

import { ColumnDef } from "@tanstack/react-table";
import BillboardCellAction from "@/components/atoms/BillboardCellAction";
import CategoryCellAction from "@/components/atoms/CategoryCellAction";
import SizeCellAction from "../atoms/SizeCellAction";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BillboardColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const billboardColumns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <BillboardCellAction data={row.original} />,
  },
];

export type CategoryColumn = {
  id: string;
  name: string;
  billboardLabel: string;
  createdAt: string;
};

export const categoriesColumns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "billboard",
    header: "Billboard",
    cell: ({ row }) => row.original.billboardLabel,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CategoryCellAction data={row.original} />,
  },
];



export type SizeColumn = {
  id: string;
  name: string;
  value: string;
  createdAt: string;
};

export const sizesColumns: ColumnDef<SizeColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <SizeCellAction data={row.original} />,
  },
];
