const express = require('express');
const jsonData = require('./db.json');
console.log(JSON.stringify(jsonData));

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/recipes', (req, res) => res.json(jsonData));

// GET route that returns all recipe names

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
});