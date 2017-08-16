'use strict';

exports.handler = (event, context, callback) => {
  let id = event.pathParameters.product || false;
  switch(event.httpMethod){
    case "GET":
      if(id) {
        callback(null, {
          statusCode: 200,
          body: "This is the READ Operation on product ID " + id
        });
        return;
      }
      callback(null, {
        statusCode: 200,
        body: "This is the LIST Operation, return all products"
      });
      break;

    case "POST":
      callback(null, {
        statusCode: 200,
        body: "This is the CREATE Operation"
      });
      break;

    case "PUT":
      callback(null, {
        statusCode: 200,
        body: "This is the UPDATE Operation"
      });
      break;

    case "DELETE":
      callback(null, {
        statusCode: 200,
        body: "This is the DELETE Operation"
      });
      break;

    default:
      console.log("Error: unsupported HTTP Method ( " + event.httpMethod + " )");
      callback(null, { statusCode: 501 });
  }
}
