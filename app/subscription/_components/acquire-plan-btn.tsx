"use client";

import { Button } from "@/app/_components/ui/button";
import createStripeCheckout from "../_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const AcquirePlanButton = () => {
  const { user } = useUser();
  const HandleAcquirePlanClick = async () => {
    const { sessionId } = await createStripeCheckout();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe publishable key is missing");
    }
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );
    if (!stripe) {
      throw new Error("Stripe is not initialized");
    }
    await stripe.redirectToCheckout({ sessionId });
  };
  const HasProPlan = user?.publicMetadata.subscriptionPlan == "pro";
  if (HasProPlan) {
    return (
      <Button
        className="w-full rounded-full font-bold"
        onClick={HandleAcquirePlanClick}
        variant="link"
        asChild
      >
        <Link
          href={`${process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL as string}?prefilled_email=${user.emailAddresses[0].emailAddress}`}
        >
          Gerenciar Assinatura
        </Link>
      </Button>
    );
  }
  return (
    <Button
      className="w-full rounded-full font-bold"
      onClick={HandleAcquirePlanClick}
    >
      Adiquirir Plano
    </Button>
  );
};

export default AcquirePlanButton;
