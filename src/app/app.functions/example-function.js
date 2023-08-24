// this is your serverless function file

// this is how you declare outside packages from NPM
const axios = require('axios');

exports.main = (context = {}, sendResponse) => {

  // you can access the payload sent to this function via the context parameter. context.parameters allows you to get a URL Query
  const { text } = context.parameters;

  // where's context.body allows you to get a POST request body. The following is a ternary operation that says "does context.body.firstname exist ? if so, use context.body.firstname otherwise(:) use null
  const firstName = context.body.firstname ? context.body.firstname : null;

  // perform all logic below here


  try {
    sendResponse({body: {message: "Hello!"}, statusCode: 200});
  } catch (error) {
    sendResponse({body: {error: error}, statusCode: 400});
  }
};
