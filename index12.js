const http=require("http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    // res.setHeader("content-type","text/html");
    res.write("<h1> this is a heading tag </h1>");
    res.write("<p>I am learning node.js .</p>");
    res.end();
})

server.listen(8000,()=>{
    console.log(`server is running at address http://localhost:8000`);
})