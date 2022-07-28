import { PrismaClient } from "@prisma/client";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const bodyParser = require('body-parser');

export default async function handler(req, res){
    const prisma = new PrismaClient();
    if(req.method === 'POST'){
        bodyParser.raw({type: 'application/json'}), (request, response) => {
            const event = request.body;
          
            // Handle the event
            switch (event.type) {
              case 'payment_intent.succeeded':
                const paymentIntent = event.data.object;
                console.log(paymentIntent);
                console.log('PaymentIntent was successful!');
                break;
              case 'payment_method.attached':
                const paymentMethod = event.data.object;
                console.log('PaymentMethod was attached to a Customer!');
                break;
              // ... handle other event types
              default:
                console.log(`Unhandled event type ${event.type}`);
            }
        /* const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                pedido: req.body.pedido,
                total: req.body.total,
                fecha: req.body.fecha
            }
        })
        res.json({
            orden
        }); */
    }
}
}