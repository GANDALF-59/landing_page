//hacer npm -y
import express from "express";
import path from "path";
import url from "url";

const server = express();

server.use(express.json());

server.get("/", (req,res) => {
    res.sendFile("index.html",{root:path.join(path.dirname(url.fileURLToPath(import.meta.url)),"..")});
})

console.log(import.meta.dirname);
server.use("/css",express.static("css"))
server.use("/img",express.static("img"))

server.listen(3000, ()=>console.log("lol"));
