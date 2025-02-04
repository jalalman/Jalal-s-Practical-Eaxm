const Meal = require("../models/meal.model");

module.exports = {
    createMeal: (req, res) => {
        Meal.create(req.body)
            .then((newMeal) => res.json(newMeal))
            .catch((err) => res.status(400).json(err));
    },
    getAllMeals: (req, res) => {
        Meal.find()
            .then((allMeals) => res.json(allMeals))
            .catch((err) => res.json(err));
    },
    getMeal: (req, res) => {
        Meal.findOne({ _id: req.params.id })
            .then((oneMeal) => res.json(oneMeal))
            .catch((err) => res.json(err));
    },
    updateMeal: (req, res) => {
        console.log("Request body:", req.body);
        Meal.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((updatedMeal) => res.json(updatedMeal))
            .catch((err) => {
                console.log("Error:", err);
                res.status(400).json(err);
            });
    },
    deleteMeal: (req, res) => {
        Meal.deleteOne({ _id: req.params.id })
            .then((result) => res.json(result))
            .catch((err) => res.json(err));
    },
};

