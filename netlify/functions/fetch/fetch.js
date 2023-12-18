// fetch.js
const axios = require('axios');

exports.handler = async function (event, context) {  
  try {
    // Parse the incoming form data from the request body
    const { name, email, gdpr, hp, list, subform, boolean } = JSON.parse(event.body);

    // Make the cURL request using axios
    const response = await axios.post('https://postal.hackclub.com/subscribe', {
      name,
      email,
      gdpr,
      hp,
      list,
      subform,
      boolean,
    });

    // log the response for debugging purposes
    console.log(response.data);

    // Return the response from the external API
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    // Return an error response if something goes wrong
    // log the error for debugging purposes
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
