const express    = require('express');
const bodyParser = require('body-parser');
const dotenv     = require('dotenv');

dotenv.config();
const PORT = 8080;
const app  = express();

app.use(bodyParser.json());
app.listen(PORT, ()=> {
    console.log(`server started at http://localhost:${PORT}`);
});