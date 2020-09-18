const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,'bc-frontend', 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'bc-frontend', 'build', 'index.html'));
});
app.listen(3000);
app.addListener('error',(err)=>{
  console.log(err);
});
console.log("Server started")