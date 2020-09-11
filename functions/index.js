const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripeJson = require('./stripe.json');
const { response } = require('express');
const stripe = require('stripe')(stripeJson.secret_key);

//API

//App Config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("Hello Amazon"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log(`Request Received of amount ===> ${total}`);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//Listen commands
exports.api = functions.https.onRequest(app)