const http=require("http");
const url=require("url")


const myUrl="http://localhost:3000/product?id=10&name=macbook";

const parseUrl=url.parse(myUrl,true);

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("product_id => "+parseUrl.query.id);
    res.write("<br>");
    res.write("product_name => "+parseUrl.query.name);
    res.end();
})

server.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000/product?id=10&name=macbook `);
})




