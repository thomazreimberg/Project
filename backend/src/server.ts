import express from 'express';

const app = express();

app.get('/user', () => {
    console.log('Está funcionando.');
})

app.listen(3333);