import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2026-01-28.clover",
  });

  try {
    const body = await request.json();
    const {
      email,
      city,
      surface,
      peb,
      age,
      currentRent,
      maxRent,
      overpayAmount,
      yearlyOverpay,
    } = body;

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Rapport Loyer Légal - Analyse loyer illégal",
              description: `Rapport PDF complet pour ${city} - ${surface}m²`,
            },
            unit_amount: 50, // 0.50€ in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/${city}`,
      customer_email: email,
      metadata: {
        city,
        surface,
        peb,
        age,
        currentRent: currentRent.toString(),
        maxRent: maxRent.toString(),
        overpayAmount: overpayAmount.toString(),
        yearlyOverpay: yearlyOverpay.toString(),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
