'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello',
      input: event,
    }),
  };

  callback(null, response);

};


module.exports.world = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'world',
      input: event,
    }),
  };

  callback(null, response);

};
