const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint bawaan modul
app.get('/', (req, res) => {
    res.send('<h1>Praktikum Azure App Service</h1>');
});

// EXERCISE: Endpoint baru untuk mengambil waktu server
app.get('/waktu', (req, res) => {
    res.json({
        waktuServer: new Date().toISOString()
    });
});

app.listen(port, () => console.log(`Server berjalan pada port ${port}`));
