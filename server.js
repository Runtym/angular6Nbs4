const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/test-boot-app'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/test-boot-app/index.html'));
});

app.listen(process.env.PORT || 80,function(){
    console.log("start angular using 80 port!")
});