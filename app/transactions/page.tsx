import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";
import TransactionButton from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <TransactionButton />
      </div>
      <DataTable data={transactions} columns={TransactionColumns} />
    </div>
  );
};

export default TransactionsPage;
