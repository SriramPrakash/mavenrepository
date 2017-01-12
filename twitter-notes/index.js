/*
 *
var express=require('express');
var request=require('request');
var app=express();

app.get("/ctof/:temp",function(req,res){
  if(!req.params.temp){
    res.status(500);
    res.send({"Error":"You are not sending the temp"})
  }
  request.get({url:"http://localhost:8080/SwaggerTest-V1.0/rest/ctofservice/"+req.params.temp}, function(error,response,body)){
    if(!error && response.statusCode==200){
      res.json(body);
    });

});
*
*/


//Add required modules here
var express = require('express');
var request = require('request');
var app = express();
//http://localhost:3000/_getproduct/8821264
app.get('/ctf/:id', function(req, res) {
       if (!req.params.id) {
           res.status(500);
           res.send({"Error": "Looks like you are not senging the product id to get the product details."});
           console.log("Looks like you are not senging the product id to get the product detsails.");
       }
      request.get({ url: "http://localhost:8080/SwaggerTest-V1.0/rest/ctofservice/" + req.params.id },      function(error, response, body) {
              if (!error && response.statusCode == 200) {
                  res.json(body);
                 }
             });
     });

     app.listen(3000,function(){
       console.log("App running in 3000 port")
     });
