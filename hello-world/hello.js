'use strict';

exports.handler = (event, context, callback) => {
  console.log("LOG: function called");
  callback(null, {
    statusCode: 200,
    body: "Hello Dave!"
  });
}
