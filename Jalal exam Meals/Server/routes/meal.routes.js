const MealController = require("../controllers/meal.controller");

module.exports = (app) => {
    app.post("/api/meals", MealController.createMeal);
    app.get("/api/meals", MealController.getAllMeals);
    app.get("/api/meals/:id", MealController.getMeal);
    app.put("/api/meals/:id/edit", MealController.updateMeal);
    app.delete("/api/meals/:id/delete", MealController.deleteMeal);
}
