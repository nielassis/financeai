import { redirect } from "next/navigation";
import NavBar from "../_components/navBar";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import AcquirePlanButton from "./_components/acquire-plan-btn";
import { Badge } from "../_components/ui/badge";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const user = await clerkClient().users.getUser(userId);
  const HasProPlan = user?.publicMetadata.subscriptionPlan == "pro";
  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Assinaturas</h1>
        <div className="flex justify-center gap-6">
          <Card className="w-[450px]">
            <CardHeader className="relative border-b border-solid py-8">
              {!HasProPlan && (
                <Badge className="absolute left-4 top-12 bg-primary/10 text-primary">
                  Ativo
                </Badge>
              )}
              <h2 className="text-center text-2xl font-semibold">
                Plano Básico
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$</span>
                <span className="text-6xl font-bold">0</span>
                <span className="text-2xl text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Apenas 10 Transações por dia</p>
              </div>
              <div className="flex items-center gap-2">
                <XIcon className="text-white" />
                <p>Relatórios de IA</p>
              </div>
              <Button
                className="w-full rounded-full text-primary"
                variant="outline"
                disabled
              >
                Fazer upgrade
              </Button>
            </CardContent>
          </Card>

          <Card className="w-[450px]">
            <CardHeader className="relative border-b border-solid py-8">
              {HasProPlan && (
                <Badge className="absolute left-4 top-12 bg-primary/10 text-primary">
                  Ativo
                </Badge>
              )}
              <h2 className="text-center text-2xl font-semibold">Plano Pro</h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$</span>
                <span className="text-6xl font-bold">19</span>
                <span className="text-2xl text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Transações ilimitadas</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Relatórios de IA ilimitados</p>
              </div>
              <AcquirePlanButton />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
