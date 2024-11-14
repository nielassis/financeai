import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { canUserAddTransaction } from "@/app/_data/can-user-add-transaction";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const SummaryCard = async ({
  icon,
  title,
  amount,
  size = "small",
}: SummaryCardProps) => {
  const userCanAddTransactions = await canUserAddTransaction();
  return (
    <Card
      className={`flex flex-col items-center sm:items-center md:items-stretch lg:items-stretch ${
        size === "large"
          ? "w-full bg-[white] bg-opacity-5 sm:w-[300px] md:w-full lg:w-full"
          : "w-full transition-all ease-in-out hover:scale-105 hover:bg-[white] hover:bg-opacity-5 sm:w-[150px] md:w-[180px] lg:w-full"
      }`}
    >
      <CardHeader className="flex items-center gap-4 md:items-start lg:items-start">
        <div
          className={`${size === "large" ? "text-4xl" : "text-2xl"} sm:text-3xl md:text-4xl lg:text-5xl`}
        >
          {icon}
        </div>
        <p
          className={`${
            size === "small"
              ? "text-sm text-muted-foreground sm:text-base"
              : "text-base text-white opacity-70 sm:text-lg md:text-xl"
          }`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-4">
        <p
          className={`font-bold ${
            size === "small"
              ? "sm:text-md text-lg md:text-2xl"
              : "text-xl sm:text-sm md:text-4xl"
          }`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && (
          <div className="w-full sm:w-auto">
            <AddTransactionButton
              userCanAddTransactions={userCanAddTransactions}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
