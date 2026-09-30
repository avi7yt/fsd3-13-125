import { products } from './data.js'
import express from 'express'

const app = express();



app.get('/about', (req, res) => { 
    res.send(`
        <h1>home page</h1>
        <a href = 'api/products'>
            Browse products
        </a>
        `)

})

app.use((req, res) => {
  res.status(404).send("route not found");
});

app.listen(5001, () => console.log(`prg4 is running http://localhost:5001/about`));