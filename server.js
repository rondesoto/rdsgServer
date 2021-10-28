const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

console.log();

app.use(express.static(path.join(__dirname, './rdsgSite')));

app.get('/', (req,res,) => {
    res.sendFile(path.join(__dirname, './rdsgSite/index.html'));
});

app.get('/shop', (req,res,) => {
    res.sendFile(path.join(__dirname, './rdsgSite/shop.html'));
});

app.get('/about', (req,res,) => {
    res.sendFile(path.join(__dirname, './rdsgSite/about.html'));
});

app.get('/cart', (req,res,) => {
    res.sendFile(path.join(__dirname, './rdsgSite/index.html'));
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});