// Importing the 'http' module
const http = require('http');
// creating an http server
http.createServer(function(req, res){
    // handling incoming http request
    res.writeHead(200,{'content-type': 'text/html'});

    res.removeHeader("Hello World");
    // removing the response header named "hello world"
}).listen(5555);
// listen on port 5555
console.log('App running on port 5555');
// logging a message to the console indicating that the app is running on port 5555