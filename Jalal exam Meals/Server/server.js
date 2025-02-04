require ('dotenv').config();
require ('./config/mongoose.config');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const MealRoutes = require('./routes/meal.routes');
MealRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});