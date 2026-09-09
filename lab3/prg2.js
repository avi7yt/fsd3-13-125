import http from 'http';

const server = http.createServer();

server.on("request", (req, res) => {
    res.write("<h1>Hello Client</h1>");
    res.write("<h2>Akash Vishwakarma</h2>");
    res.write(
        "<p>Lorem, ipsum dolor sit amet. consectutur adipiscing elit. Nulla, non culpa eaque, nithil hic magni maoires quis, aperiores repellendus fugit itaque! Consectetur, consequuntur. Iste, numquam.</<p>"
    );
    res.end("<h3>Bye Bye.....</h3>");
});

server.listen(4444, () => {
    console.log("Server is running on port 4444....");
});

