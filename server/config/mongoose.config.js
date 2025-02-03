const mongoose = require('mongoose');
const username = process.env.USERNAME;  
const password = process.env.PASSWORD;
const dbname = process.env.DB_NAME;

const uri =`mongodb+srv://root:${password}@cluster0.ys5hn.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));