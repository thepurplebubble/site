// fetch.js
const axios = require("axios");
const qs = require("qs"); // Add this line

exports.handler = async function (event, context) {
  try {
    // Parse the incoming form data from the request body
    const { name, email, gdpr, hp, list, subform, boolean } = JSON.parse(
      event.body,
    );

    // Stringify the data into a query string
    const data = qs.stringify({
      name,
      email,
      gdpr,
      hp,
      list,
      subform,
      boolean,
    });


exports.handler = async function (event, context) {
  try {
    // Parse the incoming form data from the request body
    const { name, email, gdpr, hp, list, subform } = JSON.parse(event.body);

    // Construct the email data for Catapult Mailer
    const data = {
      personalizations: [
        {
          to: [{ email: email }], // Use the email from the form submission as the recipient
          subject: "New RSVP Submission",
        },
      ],
      from: { email: "team@purplebubble.org" }, // Replace with your sender email
      content: [
        {
          type: "text/plain",
          value: `Name: ${name}\nEmail: ${email}\nGDPR: ${gdpr}\nHP: ${hp}\nList: ${list}\nSubform: ${subform}`,
        },
      ],
    };

    // Make the request to Catapult Mailer using Cloudflare Email
    const response = await axios.post(
      "https://api.mailchannels.net/tx/v1/send",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Log the response for debugging purposes
    console.log(response.data);

    // Return the response from the external API
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    // Log the error for debugging purposes
    console.log(error);

    // Return an error response if something goes wrong
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
