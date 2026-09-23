import express from 'express'

const app = express();


// request goe3s here
app.get("/", (req, res) => { 
    res.send("<h1>Hello from express</h1>")
})

const port = 50001;
app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`)
);

