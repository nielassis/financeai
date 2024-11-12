"use server";

import { db } from "@/app/_lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateAIReportSchema, GenerateAIReportSchema } from "./schema";

export const generateAIReport = async ({ month }: GenerateAIReportSchema) => {
  generateAIReportSchema.parse({ month });
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const user = await clerkClient().users.getUser(userId);
  const HasProPlan = user?.publicMetadata.subscriptionPlan == "pro";
  if (!HasProPlan) {
    throw new Error("You need a pro plan to use this feature");
  }
  const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
  const model = gemini.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const transactions = await db.transaction.findMany({
    where: {
      createdAt: {
        gte: new Date(`2024-${month}-01`),
        lte: new Date(`2024-${month}-31`),
      },
    },
  });
  const prompt = `Como um especialista em finanças, Gere um relatório com insights sobre minhas finanças, incluindo dicas para melhorar. Transações: ${transactions
    .map(
      (transaction) =>
        `${transaction.createdAt.toLocaleDateString("pt-BR")}-R$${transaction.amount}-${transaction.type}-${transaction.category}`,
    )
    .join(";")}`;
  const result = await model.generateContent(prompt);
  const response = result.response;
  console.log(response);
};
