var express = require('express');
const path = require('path');
var app = express();
const PORT = process.env.PORT || 5000;

var angularDist=__dirname+'/dist/HRplatform-front-end';
app.use(express.static(angularDist));
app.get('/', (req, res) =>  res.sendFile(path.join(andularDist+'/index.html')));

app.listen(PORT,() => console.log(`Listening on ${ PORT }`));
