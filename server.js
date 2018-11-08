var sendImage = require('./modules/sendImage');

// const sampleImage = 'photos/bedroom.jpg';
// sendImage.sendImage(sampleImage);
const path = require('path');
const express = require('express');
const app = express();
const port = 8081;
app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => res.sendFile(path.resolve('index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
