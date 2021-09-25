const http=require('http')
const fs=require('fs');
const server=http.createServer((req,res)=> {
    console.log(req);
    const url=req.url
    const method=req.method;
    if(url==='/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assigment 1</title></head>')
        res.write('<body><p>Welcome to my Page</p></body')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');    
        return res.end()
    }
    if(req.url==='/users') {
        res.write('<html>');
       // res.setHeader('Content-Type', 'text/html');
       res.write('<head><title>Assigment 1</title></head>')
        res.write('<body><h1>My List of Users are</h1></body')
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body')
        res.write('</html>');    
        return res.end();
    }
    if(req.url==='/create-user' && method==='POST') {
        const body=[]
        req.on('data', (chunk)=> {
            body.push(chunk)
        })
        return req.on('end', ()=> {
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split('=')[1]
            fs.writeFile('names.txt',message, err=> {
                res.statusCode=302;
                res.setHeader('Location','/')
                return res.end();   
            })
                
            });
   }
})
server.listen(3000)