require("dotenv").config();
const mongoose = require("mongoose");
const dbName = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ys5hn.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Established a connection to the database with port " + process.env.PORT))
    .catch((err) => console.log("Something went wrong when connecting to the database", err));
