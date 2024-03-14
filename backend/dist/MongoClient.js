"use strict";

var _mongodb = require("mongodb");
var dotenv = require("dotenv");
dotenv.config();
var uri = process.env.STRING_URI;
var DATABASE = "ToolsDevelopment";
var _client = new _mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: _mongodb.ServerApiVersion.v1
});
module.exports = {
  client: function client(callback) {
    _client.connect(function (err) {
      if (err) {
        console.error("Erreur de connexion à MongoDB:", err);
        return;
      }
      console.log("Connecté à la base de données");
      var db = _client.db(DATABASE);
      callback(db);
    });
  }
};