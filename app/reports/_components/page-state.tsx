import { Button } from "@/app/_components/ui/button";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { EyeOff, TriangleAlert } from "lucide-react";
import Link from "next/link";

const PageState = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Usuário não identificado");
  }
  const user = await clerkClient.users.getUser(userId);
  const HasProPlan = user?.publicMetadata.subscriptionPlan == "pro";

  return (
    <div className="flex justify-center p-4">
      {!HasProPlan ? (
        <div className="flex max-w-xs flex-col items-center justify-center gap-3 text-center sm:max-w-md">
          <EyeOff className="text-primary" size={48} />
          <p className="pt-6 text-muted-foreground">
            Para usar essa ferramenta, você precisa ter uma assinatura Pro.
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-3 pt-6 sm:flex-row">
            <Link href="/subscription" className="w-full sm:w-auto">
              <Button className="w-full font-bold sm:w-[200px]">
                Fazer Upgrade!
              </Button>
            </Link>
            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full font-bold sm:w-[200px]"
              >
                Voltar ao dashboard
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex max-w-xs flex-col items-center justify-center gap-3 text-center sm:max-w-md">
          <TriangleAlert className="text-primary" size={48} />
          <p className="pt-6 text-muted-foreground">
            Função Em Desenvolvimento
          </p>
          <p className="text-muted-foreground">
            Nos desulpe, essa função está em desenvolvimento. Prometemos
            corrigir o mais rápido possível.
          </p>
          <div className="flex w-full items-center justify-center gap-3 pt-6">
            <Link href="/" className="w-full sm:w-auto">
              <Button className="w-full font-bold sm:w-[200px]" variant="ghost">
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
