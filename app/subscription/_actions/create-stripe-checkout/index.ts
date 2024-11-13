"use server";

import { auth } from "@clerk/nextjs/server";
import Stripe from "stripe";

const createStripeCheckout = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Stripe secret key is missing");
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-10-28.acacia",
  });
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: process.env.STRIPE_PRO_PLAN_PRICE_ID,
        quantity: 1,
      },
    ],
    success_url: process.env.APP_URL,
    cancel_url: process.env.APP_URL,
    subscription_data: {
      metadata: {
        clerk_user_id: userId,
      },
    },
  });

  return { sessionId: session.id };
};

export default createStripeCheckout;
