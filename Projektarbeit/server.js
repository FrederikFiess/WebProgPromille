var serverStatic = require('serve-static');
const express = require("express");


var app = express();
console.log("Server running");
// app.use(serverStatic("public,http",{"index":[__dirname+"/home.html"]}));
app.use("", express.static(__dirname));
app.listen(8080);
