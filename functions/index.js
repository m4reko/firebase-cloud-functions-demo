const functions = require("firebase-functions");
const { exec } = require("child_process");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.region("europe-west1").https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.callThis = functions.region("europe-west1").https.onCall((data, context) => {
  return {message: "Hello World"}
});
