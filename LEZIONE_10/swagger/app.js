const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "My API",
            description: "just a simple demo",
            contact: {
                name: "Mario"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//ROUTES
/**
 * @swagger
 * /customers:
 *    get:
 *      description: lista di tutti i clienti
 *    responses:
 *      "200":
 *        description: Successo
 */

app.get('/customers', (req, res) => {
    res.status(200).send('Tutti i clienti');
});

/**
 * @swagger
 * /customer:
 *    put:
 *      description: Modifica il cliente
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: nome del cliente
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      "201":
 *        description: cliente aggiornato
 * 
 * 
 */

app.get('/customer', (req, res) => {
    res.status(200).send('dato aggiornato');
})


app.listen(3000, () => {
    console.log('server in ascolto');


})