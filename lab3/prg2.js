import http from 'http';

const server = http.createServer();

server.on("request", (req, res) => {
    res.write("<h1>Hello Client</h1>");
    res.write("<h2>Akash Vishwakarma</h2>");
    res.end();
});

server.listen(4444, () => {
    console.log("Server is running on port 4444....");
});