import http from 'http'
import { getAllProducts } from './product.js';

const server = http.createServer((req, res) => {
    if (req.url === "/api/v1/products" && req.method === "GET") {
      res.statusCode = 200;
      const data = getAllProducts();
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify({
        count: data.length,
        data,
      }),
      );
    }
    
    
    else if (req.url === "/" && req.method === "POST") {
      // console.log("Request: ", req);
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      })
      req.on("end", () => {
        const product = JSON.parse(body);
        console.log("Recieved Product: ", product);
        res.statusCode = 201;
        res.end(JSON.stringify({msg: 'product added', product}));
      });
    }
    
    
    else if (req.url.startsWith("/products/") && req.method === "PUT") {
      const productID = req.url.split('/').pop
      console.log('Update Product id:', productID);
      
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        const product = JSON.parse(body);
        console.log("Updated Product: ", product);
        res.statusCode = 200;
        res.end(JSON.stringify({ msg: "product updated", product }));
      });
    }
    
    else if (req.url === "/" && req.method === "DELETE") {
      res.statusCode = 200;
      res.end("DELETE Request");
    } else {
      res.statusCode = 404;
      res.end("request not found");
    }
})

server.listen(5001, () =>
  console.log("prg6 is running on http://localhost:5001/")
);