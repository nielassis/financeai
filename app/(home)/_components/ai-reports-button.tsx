"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { BotIcon, CircleOff, TriangleAlert } from "lucide-react";
import { generateAIReport } from "../_actions/generate-ai-report";

interface AIReportsButtonProps {
  month: string;
}

const AIReportsButton = ({ month }: AIReportsButtonProps) => {
  const handleGenerateReportClick = async () => {
    try {
      await generateAIReport({ month });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-bold" variant="ghost">
          <BotIcon /> Relatórios IA
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <TriangleAlert className="text-primary" />
            <DialogTitle>Função Em Desenvolvimento</DialogTitle>
            <DialogDescription>
              Estamos trabalhando para melhorar essa ferramenta.
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter>
          <div className="flex w-full justify-center gap-3">
            <DialogClose asChild>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button onClick={handleGenerateReportClick} disabled>
              <CircleOff className="mr-2" />
              Gerar Agora
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AIReportsButton;
