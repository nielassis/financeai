"use client";

import { Button } from "@/app/_components/ui/button";
import createStripeCheckout from "../_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";

const AcquirePlanButton = () => {
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
  return (
    <Button
      className="w-full rounded-full font-bold text-white"
      onClick={HandleAcquirePlanClick}
    >
      Adiquirir plano
    </Button>
  );
};

export default AcquirePlanButton;
