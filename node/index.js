const fs = require("fs");

fs.writeFileSync("text.txt","Good morning");

let data = fs.readFileSync("text.txt", "utf8");

console.log(data);

const http = require("http");
const server = http.createServer((req,res) =>{
    console.log("Server is running");

})

server.listen(3000);