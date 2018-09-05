var http = require('http');
var url = require('url');
var config = require('./config');

// ------------------------
// WEB SERVER
// ========================
var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/|\/$/g, '');

  var chosenHandler =
    typeof(router[trimmedPath]) === 'undefined' ?
    handlers.notFound :
    router[trimmedPath];

  chosenHandler(function(statusCode, payload) {
    statusCode =
      typeof(statusCode) === 'number' ?
      statusCode :
      200;

    payload =
      typeof(payload) === 'object' ?
      payload :
      {};

    var payloadString = JSON.stringify(payload);

    res.setHeader('Content-Type', 'application/json');
    res.writeHead(statusCode);
    res.end(payloadString);

    console.log(
      'Code:',
      statusCode,
      'Returning response:',
      payloadString
    );
  })
});

server.listen(config.port, function() {
  console.log('Server started on port '+config.port+' in '+config.envName+' environment');
});


// ------------------------
// ROUTING
// ========================
var handlers = {}

handlers.hello = function(callback) {
  callback(200, {'message': 'Hello World!! :D'});
}

handlers.ping = function(callback) {
  callback(200);
}

handlers.bye = function(callback) {
  callback(401, {'message': 'Bye Bye World!! :\'('});
}

handlers.notFound = function(callback) {
  callback(404);
}

var router = {
  'hello': handlers.hello,
  'ping': handlers.ping,
  'bye': handlers.bye
}
