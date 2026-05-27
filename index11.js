const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/" && req.method==="GET"){
        res.end(`This is a home page`);
    }
    else if(req.url==="/about" && req.method==="POST"){
        res.end(`This is an about page`);
    }
    else if(req.url==="/contact" && req.method==="GET"){
        res.end(`This is contact page`);
    }
    else{
        res.end(`404 error page not found`);
    }
})
server.listen(8000,()=>{
    console.log(`server is running at address http://localhost:8000`);
});