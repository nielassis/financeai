"use client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";
import { Transaction } from "@prisma/client";
import { Button } from "@/app/_components/ui/button";
import { Pencil, TrashIcon } from "lucide-react";
import {
  TransactionCategoryLabels,
  TransactionPaymentMethodLabels,
} from "@/app/_constants/transactions";

export const TransactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TransactionCategoryLabels[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
    cell: ({ row: { original: transaction } }) =>
      TransactionPaymentMethodLabels[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: () => {
      return (
        <div className="space-x-1">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <TrashIcon />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Pencil />
          </Button>
        </div>
      );
    },
  },
];
