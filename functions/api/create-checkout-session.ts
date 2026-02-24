export async function onRequestPost(context: any) {
  const { request, env } = context;
  
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

  try {
    const session = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "payment_method_types[0]": "card",
        "line_items[0][price_data][currency]": "eur",
        "line_items[0][price_data][product_data][name]": "Rapport Loyer Légal - Analyse loyer illégal",
        "line_items[0][price_data][product_data][description]": `Rapport PDF complet pour ${city} - ${surface}m²`,
        "line_items[0][price_data][unit_amount]": "50",
        "line_items[0][quantity]": "1",
        "mode": "payment",
        "success_url": `${env.NEXT_PUBLIC_URL || "https://production.rentcheck.pages.dev"}/merci?session_id={CHECKOUT_SESSION_ID}`,
        "cancel_url": `${env.NEXT_PUBLIC_URL || "https://production.rentcheck.pages.dev"}/${city}`,
        "customer_email": email,
        "metadata[city]": city,
        "metadata[surface]": surface,
        "metadata[peb]": peb,
        "metadata[age]": age,
        "metadata[currentRent]": currentRent.toString(),
        "metadata[maxRent]": maxRent.toString(),
        "metadata[overpayAmount]": overpayAmount.toString(),
        "metadata[yearlyOverpay]": yearlyOverpay.toString(),
      }),
    });

    const sessionData = await session.json();

    if (!session.ok) {
      throw new Error(sessionData.error?.message || "Failed to create session");
    }

    return new Response(JSON.stringify({ url: sessionData.url }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || "Error creating checkout session" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
