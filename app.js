console.log("Welcome to JS");
const fs=require('fs');
const http=require('http');
const server=http.createServer((req,res)=> {
    const url=req.url;
    const method=req.method;
    if(url==='/') {
        console.log("URL Home", url.req)
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==="/message" && method==="POST") {
        console.log("URL Message", url.req)
        fs.writeFileSync('message.txt','Dummy');
        res.statusCode=302;
        res.setHeader('Location','/')
        return res.end();
    }
    console.log("URL Home 11", url.req)
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my node.js server</h1></body>');
    res.write('</html>');
    res.end();

    // process.exit();
});
console.log()
server.listen(3002);