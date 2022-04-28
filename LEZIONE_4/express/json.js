const express = require('express');

const { products } = require('./data');

const app = express();

//app.get('/', (req, res) => {
//res.json(products);
//})


//ROUTING CON PARAMETRI E QUERY STRING
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">prodotti</a>')
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, title, brand } = product
        return { id, title, brand }
    })
    res.json(newProducts);
})

//PARAMETRO = :productID
app.get('/api/products/:productID', (req, res) => {
    console.log(req);
    console.log(req.params);

    const { productID } = req.params;

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    )
    if (!singleProduct) {
        return res.status(404).send('L\'articolo non esiste');
    }
    return res.json(singleProduct);
})

app.get('/api/products/:productID/comments/:commentsID', (req, res) => {
    console.log(req.params);
    res.send('un oggetto bellissimo');
})

//QUERY STRING - FORMATO STANDARD PER END POINT API
//   =   /api/v1/query
//api/v1/query?search=i&limit=1

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);

    const { search, limit } = req.query;
    let sortedProducts = [...products];

    //controllo sulla chiave search
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.title.startsWith(search);
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts < 1) {
        //res.status(200).send('non ci sono articoli che coincidono con la tua ricerca');
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts);

})


//SERVER 
app.listen(5000, () => {
    console.log('Server è attivo sulla porta 5000');
})