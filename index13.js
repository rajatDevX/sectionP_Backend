const http=require("http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    // res.setHeader("content-type","text/html");
    // res.write("<h1> this is a heading tag </h1>");
    // res.write("<p>I am learning node.js .</p>");
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="2">
        <tr>
            <th>Roll number</th>
            <th>Name</th>
            <th>Branch</th>
        </tr>
        <tr>
            <td>12</td>
            <td>vikas</td>
            <td>ECE</td>
        </tr>
         <tr>
            <td>13</td>
            <td>Sumit</td>
            <td>Mechanical</td>
        </tr>
         <tr>
            <td>14</td>
            <td>Durgesh</td>
            <td>CSE</td>
        </tr>
    </table>
</body>
</html>`);
})

server.listen(8000,()=>{
    console.log(`server is running at address http://localhost:8000`);
})