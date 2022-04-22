const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
    "sk_test_51Kp487SFteF082WGBfVHrmBplUh4lPKAQzvZzbKjOErRefbw8diGnGiAYw6ySvPKEctYWj8TpCZy1SUARKWKDJZm00JMDjqAys"
);

//http://localhost:5001/clone-1c1d8/us-central1/api

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello From Cloud"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app);