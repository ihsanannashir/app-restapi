const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse app/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//call the routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});