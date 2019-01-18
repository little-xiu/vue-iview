var express = require('express');
var app = express();
var os = require('os');
var mockList = require('../mock/index.js');
mockList.forEach(item => {
  app[item.type || 'post'](item.url, function(req, res) {
    setTimeout(() => {
      console.log(res, 'res22222')
      res.status(200).json(item.result);
    }, item.delay || 0);
  })
})

// 获取本地ip地址
function getIPAdress(){  
  var interfaces = os.networkInterfaces();  
  for(var devName in interfaces){  
    var iface = interfaces[devName];  
    for(var i=0;i<iface.length;i++){  
      var alias = iface[i];  
      if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
        return alias.address;  
      }  
    }  
  }  
}
var server = app.listen(3000, function () {
  console.log(`http://${getIPAdress()}:3000`);
})
