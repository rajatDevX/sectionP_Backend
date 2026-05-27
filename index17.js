const http=require("http");

const server=http.createServer((req,res)=>{
    console.log("request received");
    console.log("Method: "+req.method);
    console.log("URL: "+req.url);
    console.log("Headers: ",req.headers);
    res.writeHead(200,{"content-type":"text/html"});
    res.end("Hello World");
})
server.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000`);  
})