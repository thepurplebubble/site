// fetch.js

exports.handler = async function (event, context) {
  try {
    // Parse the incoming form data from the request body
    const body = JSON.parse(event.body);
    // serialise the JSON object to a string in the format ame=kieran&email=test%40test.com&gdpr=consent+given&hp=&list=xjAecLBfJ3HdnmuBXhvkfg&subform=yes&boolean=true&submit=
    const formData = new URLSearchParams(body).toString();

    // Make an AJAX request using the Fetch API to the target API
    const response = await fetch("https://postal.hackclub.com/subscribe", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    // Parse the response from the target API
    const data = await response.json();

    // Return a response to the client
    console.log("data:", data);
    return {
      statusCode: response.status,
      body: JSON.stringify({ message: data.message }),
    };
  } catch (error) {
    console.error("Error:", error);

    // Return an error response to the client
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
