const dotenv = require("dotenv");
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const uri = process.env.STRING_URI;
const DATABASE = "ToolsDevelopment";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = {
  client: (callback) => {
    client.connect((err) => {
      if (err) {
        console.error("Erreur de connexion à MongoDB:", err);
        return;
      }
      console.log("Connecté à la base de données");
      const db = client.db(DATABASE);
      callback(db);
    });
  },
};
