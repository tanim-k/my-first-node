const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('look man! i can make Node Code now!!!!')
})

app.listen(port, () => {
    console.log('listening to port', port);
})