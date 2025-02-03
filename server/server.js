require('dotenv').config();
require('./config/mongoose.config');
const express = require("express");
const app = express();
const cors = require('cors');
const port =process.env.PORT || 8000;
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
//const AllMyUserRoutes = require("./server/routes/user.routes");
//AllMyUserRoutes(app);

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen(port) ,()=> {
    console.log(`Listening at Port ${port} for requests`);
}