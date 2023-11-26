const express = require('express');
const itemRouter = require('./itemsRouter');

const app = express();
const port = 3000;

app.use(express.json()); // parses request into json and attaches to req.body

app.use('/items', itemRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});