const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


app.use(express.static(path.join(__dirname, 'docs')));
app.use(express.static(__dirname + '/static'));

router.get('/',function(req,res){
  res.sendFile('index.html');
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(23333);

console.log('Running at Port 23333');