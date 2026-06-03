const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Praktikum Azure App Service</h1>');
});

// EXERCISE: Endpoint baru untuk mencetak waktu server backend
app.get('/waktu', (req, res) => {
    res.json({
        waktuServer: new Date().toISOString()
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
