const http=require("http");


const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>`)
})
server.listen(8000,()=>{
    console.log(`server is running at address http://localhost:8000`);
});