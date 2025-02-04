const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
   dish_name: {
        type: String,
        required: [true, "Dish name is required"],
        minlength: [3, "Dish name must be at least 3 characters long"],
        maxlength: [20, "Dish name must be at most 20 characters long"]
     },
     total_minutes: {
        type: Number,
        required: [true, "Total minutes is required"],
        min: [2, "Total minutes must be at least 2 minute long"],
        max: [240, "Total minutes must be at most 240 minutes long"]
     },
     directions: {
        type: String,
        required: [true, "Directions is required"],
        minlength: [10, "Directions must be at least 10 characters long"],
      
     },
     ingredient_one: {
        type: String,
 
     },
    ingredient_two: {
        type: String,
    
        },
    ingredient_three: {
        type: String,
    
        },
        
    
}, { timestamps: true });

const Meal = mongoose.model("Meal", MealSchema);
module.exports = Meal;