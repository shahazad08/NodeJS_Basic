console.log("Welcome to JS");
const routes=require('./routes')
const http=require('http');
const server=http.createServer(routes.handler);
console.log("Export Route data", routes.someText)
server.listen(3002);