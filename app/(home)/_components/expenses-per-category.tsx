import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TransactionCategoryLabels } from "@/app/_constants/transactions";
import { TotalExpensePerCategory } from "@/app/_data/get-dashboard/types";

interface ExpensesPerCategoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

const ExpensesPerCategory = ({
  expensesPerCategory,
}: ExpensesPerCategoryProps) => {
  return (
    <ScrollArea className="col-span-2 h-full max-h-[300px] rounded-md border pb-6 sm:min-w-[200px]">
      <CardHeader className="gap-4">
        <CardTitle className="text-lg font-bold">
          Gastos por Categoria
        </CardTitle>
        <span className="border-b"></span>
      </CardHeader>

      <CardContent className="space-y-6">
        {expensesPerCategory.map((category) => (
          <div key={category.category} className="space-y-2">
            <div className="flex w-full justify-between">
              <p className="text-sm font-semibold">
                {TransactionCategoryLabels[category.category]}
              </p>
              <p className="text-sm font-semibold">
                {category.percentageOfTotal}%
              </p>
            </div>
            <Progress
              value={category.percentageOfTotal}
              aria-label={`Progresso da categoria ${TransactionCategoryLabels[category.category]} com ${category.percentageOfTotal}%`}
            />
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default ExpensesPerCategory;
