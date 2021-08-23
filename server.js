// konfigurasi global expressJS
const express = require('express');
const app = express();
const port = 4200;
const path = require('path');

// public folder penyimpanan script
app.use('/', express.static(path.join(__dirname, 'public')))

// panggil port aplikasi yang berjalan
app.listen(port, ()=> {
    console.log(`aplikasi berjalan pada port ${port}`);
})