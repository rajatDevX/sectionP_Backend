const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.method==="POST"){
        req.on("data",chunk=>{
            console.log("Original chunk:",chunk);
            console.log("Readable :",chunk.toString());
        });
        req.on("end",()=>{
            res.end("check console");
        });
    }
});

server.listen(3000);