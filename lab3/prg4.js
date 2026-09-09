import http, { createServer } from 'http';
import { createReadStream } from 'fs';

const server = createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("content-type", "text/html");
        res.write(`
                <a href='/spotify'>Spotify</a>
                <a href='/applemusic'>Apple Music</a>
            `);
        res.end();
    } else if (req.url === "/spotify") {
        res.setHeader("content-type", "text/html");
        const stream = createReadStream("spotify.html", { encoding: "utf-8" });
        stream.pipe(res);
    } else if (req.url === "/applemusic") {
        res.setHeader("content-type", "text/html");
        const stream = createReadStream("applemusic.html", { encoding: "utf-8" });
        stream.pipe(res);
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000, () => console.log("prg4 is running"));