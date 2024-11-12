import { Button } from "@/app/_components/ui/button";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { EyeOff, TriangleAlert } from "lucide-react";
import Link from "next/link";

const PageState = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Usuário não identificado");
  }
  const user = await clerkClient().users.getUser(userId);
  const HasProPlan = user?.publicMetadata.subscriptionPlan == "pro";

  return (
    <div className="flex justify-center">
      {!HasProPlan ? (
        <div className="flex flex-col items-center justify-center gap-3">
          <EyeOff className="text-primary" size={48} />
          <p className="pt-6 text-muted-foreground">
            Para usar essa ferramenta, você precisa ter uma assinatura Pro.
          </p>
          <div className="flex w-full items-center justify-center gap-3 pt-6">
            <Link href="/subscription">
              <Button className="w-[200px] font-bold">Fazer Upgrade!</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-[200px] font-bold">
                Voltar ao dashboard
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3">
          <TriangleAlert className="text-primary" size={48} />
          <p className="pt-6 text-muted-foreground">
            Função Em Desenvolvimento
          </p>
          <p className="text-muted-foreground">
            Nos desulpe, essa função está em desenvolvimento, prometemos
            corrigir o mais rapido possível.
          </p>
          <div className="flex w-full items-center justify-center gap-3 pt-6">
            <Link href="/dashboard">
              <Button className="font-bold" variant="ghost">
                Ir para o Dashboard
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageState;
