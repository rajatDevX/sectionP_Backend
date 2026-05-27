const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req.method);
    console.log(req.headers);
    console.log(req.url);
    res.end("this is my first server");
});
server.listen(8000,()=>{
    console.log(`server is running at address http://localhost:8000`);
})