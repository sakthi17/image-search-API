
var express = require('express');
var app = express();
var requestModule = require("request");
var MongoClient = require('mongodb').MongoClient;
var dburl = process.env.MLAB_URI; 
var dbname = process.env.MLAB_DB_NAME;

function performSearchWithGoogleAPI(url,response){
  requestModule(url, function(error, apiResponse, apiResponseBody) {
    if(error){
      throw error;
      response.send("Error in Custom Search Engine Response");
    }
    
    var body = JSON.parse(apiResponseBody);   
    if(0 && body.items.length <= 0)
      response.send("No search Results");  
    
    var resultObject = body.items.map(function(item){
      return {
       url : item.link ,
       contexturl : item.image.contextLink,
       thumbnail   : item.image.thumbnailLink,
       title      : item.title
      };
    }); 
    response.send(resultObject);
  });      
} 

function saveRequestInfo(searchedFor,date){
  MongoClient.connect(dburl,function(err,client){
    if(err) throw err
    console.log("Connected to MongoDB succesfully...");
    
    var db = client.db(dbname);
    var collection = db.collection("timestamp");
    var doc = { topic: searchedFor, time: date.toString()};
    
    collection.insertOne(doc, function(err,result){
      if(err) throw err
      console.log("Doc " + JSON.stringify(doc) + " inserted succesfully");    
      client.close();
    });
    
  });
}

app.get('/api/imagesearch/:query/:offset?',function(request,response){
  var query = request.params.query;
  var result_per_page = request.params.offset || 10;
  var url = "https://www.googleapis.com/customsearch/v1?";
  
  url += "key=" + process.env.KEY + 
         "&cx=" + process.env.CX + 
         "&q=" + encodeURIComponent(query) + 
         "&num="+ result_per_page +
         "&fileType=png,jpg&searchType=image&alt=json&prettyPrint=true";
  
  performSearchWithGoogleAPI(url,response);  
  saveRequestInfo(query,new Date());
});


app.get('/api/latest/imagesearch',function(request,response){
  MongoClient.connect(dburl,function(err,client){
    if(err) throw err  
    console.log("DISPLY SEARCH: Successfully connected to MONGO DB");
    
    var db = client.db(dbname);
    var collection = db.collection("timestamp");
    collection.find({})
      .project({topic: 1, time: 1, _id: 0})
      .toArray(function(err,result){
      response.send(result);
    }); 
  });
});  

module.exports = app;