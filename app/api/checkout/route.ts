import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { plan, billing } = await req.json();

    // Placeholder Stripe integration
    // In production: const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    // const session = await stripe.checkout.sessions.create({ ... });

    const priceMap: Record<string, Record<string, number>> = {
      basic: { monthly: 999, annual: 5988 },
      standard: { monthly: 1499, annual: 8988 },
      premium: { monthly: 1999, annual: 11988 },
    };

    const amount = priceMap[plan]?.[billing] ?? 1499;

    return NextResponse.json({
      success: true,
      checkoutUrl: `https://checkout.stripe.com/placeholder?plan=${plan}&billing=${billing}&amount=${amount}`,
      sessionId: `cs_placeholder_${Date.now()}`,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { success: false, error: "Checkout failed. Please try again." },
      { status: 500 }
    );
  }
}
