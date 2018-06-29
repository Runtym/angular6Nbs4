const express = require('express');
const path = require('path');
const app = express();
const conf = require('./conf/conf');
app.use(express.static(__dirname + '/../dist/test-boot-app'));

var chokidar = require('chokidar')
var watcher = chokidar.watch('./server'); 
watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /dist/ module cache from server")
    Object.keys(require.cache).forEach(function(id) { 
        delete require.cache[id]
    })
  })
})

const uc = require('./controller/user_cont');

app.use(conf.head);

app.get('/*', conf.html);

app.use('/api/users', uc);

app.listen(8080,function(){
    console.log('start express server (port:8080)');
})