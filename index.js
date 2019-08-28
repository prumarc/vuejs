const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
 
const app = express();
 
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});
 
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});