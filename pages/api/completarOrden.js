import { PrismaClient } from "@prisma/client";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res){
    const prisma = new PrismaClient();
    if(req.method === 'POST'){
        const orden = await prisma.orden.create({ 
            data: req.body.orden
        })
        res.json({
            orden
        });
    }
}