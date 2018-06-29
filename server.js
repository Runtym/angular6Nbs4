const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/test-boot-app'));

app.use(function (req, res, next) {
	res.header('X-Frame-Options','SAMEORIGIN');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
	res.header('Access-Control-Allow-Headers','X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

app.get('/*', function(req,res,next) {
    console.log(req.method);
    res.sendFile(path.join(__dirname+'/dist/test-boot-app/index.html'));
    next();
});


app.listen(8080,function(){
    console.log('start express server (port:8080)');
})