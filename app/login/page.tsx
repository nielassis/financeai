import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-4 lg:grid lg:grid-cols-2 lg:p-0">
      <div className="absolute inset-0 -z-10 h-full w-full lg:hidden">
        <Image
          src="/login.png"
          alt="Background"
          fill
          className="h-full w-full object-cover blur-sm"
        />
      </div>

      <div className="flex w-full max-w-[550px] flex-col justify-center rounded-md bg-background p-6 shadow-md lg:rounded-none lg:bg-transparent lg:p-8 lg:shadow-none">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
          className="mb-8"
        />
        <h1 className="mb-3 text-center text-4xl font-bold lg:text-left">
          Bem-vindo
        </h1>
        <p className="mb-8 text-center text-muted-foreground lg:text-left">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline" className="w-full lg:w-auto">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>

      <div className="relative hidden h-full w-full lg:block">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
