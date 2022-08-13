var MongoClient = require('mongodb').MongoClient;

require('dotenv').config();
//console.log(process.env)    //  Keep for debug/test
//const development = process.env.DEVELOPMENT_DB;   //  Voyager
const production = process.env.PRODUCTION_DB;   // Enterprise
//var url = development;    //  Voyager
var url = production;   //  Enterprise



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sample_guides");
  var query = { hasRings: true };
  dbo.collection("planets").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result );
  //  console.log(" Using " + url.toString())   //  Keep for debug/test
    db.close();
  });
});