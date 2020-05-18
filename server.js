var express = require('express');
const path = require('path');
var app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'dist/HRplatform-front-end'))); 
app.listen(PORT,() => console.log(`Listening on ${ PORT }`));
