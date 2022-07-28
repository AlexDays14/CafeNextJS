import { PrismaClient } from "@prisma/client";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res){
    const prisma = new PrismaClient();
    if(req.method === 'POST'){
        // Create Checkout Sessions from body params.
        /* const session = await stripe.checkout.sessions.create({
            line_items: items,
            mode: 'payment',
            success_url: `http://localhost:3000/?success=true`,
            cancel_url: `http://localhost:3000/?canceled=true`,
            customer_email: req.body.email,
        });
        res.json({url: session.url, session}) */
          // Create a PaymentIntent with the order amount and currency
        
        if(req.body.paymentIntent){
            const paymentIntent = await stripe.paymentIntents.update(
                req.body.paymentIntent,
                {
                    amount: Math.round(Number(req.body.total * 100)),
                    customer: req.body.email
                }
            );

            res.json({
                clientSecret: paymentIntent.client_secret,
                id: paymentIntent.id,
            });
        }else{
            const paymentIntent = await stripe.paymentIntents.create({
                amount: Math.round(Number(req.body.total * 100)),
                currency: "mxn",
                automatic_payment_methods: {
                    enabled: true,
                },
                description: req.body.email
            });

            res.json({
                clientSecret: paymentIntent.client_secret,
                id: paymentIntent.id,
            });
        }

        /* const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                pedido: req.body.pedido,
                total: req.body.total,
                fecha: req.body.fecha,
                pi: paymentIntent.id
            }
        }) */
    }
}