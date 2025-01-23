import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia', 
});

export async function POST(req: NextRequest) {
  try {
    // console.log enviormment varianbles to check if they give it properly
    console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY);
    console.log('Client URL:', process.env.CLIENT_URL);

   
    const { cart } = await req.json();

    //console.log cart data to validate its structure
    console.log('Received cart:', cart);

   
    if (!cart || cart.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // Creating Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cart.map((item: any) => ({
        price_data: {
          currency: 'usd',  //  currency set to usd
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.price * 100, // Amount in come in scents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    // Return session ID to the client
    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    // console.log the full error 
    console.error('Error creating checkout session:', error);

   
    return NextResponse.json({
      error: error.message || 'Internal Server Error',
    }, { status: 500 });
  }
}

