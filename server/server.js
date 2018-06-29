const express = require('express');
const path = require('path');
const app = express();
const conf = require('./conf/conf');
app.use(express.static(__dirname + '/../dist/test-boot-app'));


const uc = require('./controller/user_cont');

app.use(conf.head);

app.get('/*', conf.html);

app.use('/api/users', uc);

app.listen(8080,function(){
    console.log('start express server (port:8080)');
})