"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface AddTransactionButtonProps {
  userCanAddTransactions?: boolean;
}

const AddTransactionButton = ({
  userCanAddTransactions,
}: AddTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-bold md:px-6 md:py-3 md:text-base"
              onClick={() => setDialogIsOpen(true)}
              disabled={!userCanAddTransactions}
            >
              Adicionar transação
              <ArrowDownUpIcon className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {!userCanAddTransactions &&
              "Limite de transações atingido, atualize o plano para adicionar mais transações."}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
