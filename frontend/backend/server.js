import express from 'express';

const app =  express();

app.get('/', (req, res) => {
    res.send('server is ready');
});
app.listen(500, () => {
    console.log('serve at http://localhost:5000');
});