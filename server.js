const engines = require('consolidate');
const http = require("http");
const express=require("express");
const app=express();
const hostname = '127.0.0.1';
const PORT = 3000;
const server = http.createServer(app);

app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static("public"));
app.use(express.static("views"));

app.get('/',function(req,res){
    res.render('index.html');
  });


server.listen(PORT,hostname,() => {
    console.log(`Server running on port: ${PORT}`);
});