//initialize express server
const express = require('express');
const app = express();
const port = 3000;

//show homepage on entry
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

//link our javascript and css files
app.get('/index.js', (req, res) => {
    res.sendFile('index.js', { root: __dirname });
})
app.get('/styles.css', (req, res) => {
    res.sendFile('styles.css', { root: __dirname });
})

//start express server
app.listen(port, () => {
    console.log('midway is live...');
    console.log('View MidwayUSA Prompt @ http://localhost:3000');
});