import http from "node:http";
import { readFile } from "node:fs/promises";

const RESOURCE = {
    "/": ["index.html", "text/html"],
    "/style.css": ["style.css", "text/css"],
    "/main.js": ["main.js", "text/javascript"]
};

const SERVER = http.createServer(async (req, res) => {
    const RUTE = req.url.split("?")[0];
    if (req.method !== "GET" || !Object.hasOwn(RESOURCE, RUTE)) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        return res.end("Recurso no encontrado");
    }

    const [ARCHIVE, TYPE] = RESOURCE[RUTE];
});



SERVER.listen(3000, "127.0.0.1");