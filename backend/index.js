const express = require('express');

const userRouter = require('./Routers/UserRouter');

const cors=require('cors');
require('./connection');

const app = express();

const port = 5000;

// middleware
app.use(cors({
    origin: ['http://localhost:3000'],
}));
app.use(express.json());
app.use('/user', userRouter);

// endpoint or route
app.get('/', (req, res) => {
    res.send('response from express');
});

// getall
app.get('/getall', (req, res) => {
    res.send('response from getall');
});

// delete
app.get('/delete', (req, res) => {
    res.send('delete route');
});

// update
app.get('/update', (req, res) => {
    res.send('update route');
});

app.listen(port, () => {
    console.log(`Server started`);
});