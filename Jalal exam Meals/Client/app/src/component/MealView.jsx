import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './MealView.css';

function MealView() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/meals/${id}`)
            .then((res) => {
                setMeal(res.data);
            })
            .catch((err) => {
                console.log(err);
                setError("Meal not found");
            });
    }, [id]);

    const deleteMeal = (mealId) => {
        axios.delete(`http://localhost:8000/api/meals/${mealId}/delete`)
            .then((res) => {
                navigate("/");
            })
            .catch(err => console.log(err));
    };

    if (error) {
        return <p>{error}</p>;
    }

    if (!meal) {
        return <div className="loading">
            <i className="fas fa-spinner fa-spin"></i> Loading...
        </div>;
    }

    return (
        <div className="container">
            <h1 className="title">{meal.dish_name}</h1>
            <div className="meal-details">
               
                <p><strong>Total Minutes:</strong> {meal.total_minutes}</p>
                <p><strong>Directions:</strong> {meal.directions}</p>
                <p><strong>Ingredient One:</strong> {meal.ingredient_one}</p>
                <p><strong>Ingredient Two:</strong> {meal.ingredient_two}</p>
                <p><strong>Ingredient Three:</strong> {meal.ingredient_three}</p>
            </div>
            <Link to={`/meals/${meal._id}/edit`} className="btn btn-warning">
                <i className="fas fa-edit"></i> Edit
            </Link>
            <button onClick={() => deleteMeal(meal._id)} className="btn btn-danger">
                <i className="fas fa-trash"></i> Delete
            </button>
            <Link to="/" className="btn btn-secondary">
                <i className="fas fa-arrow-left"></i> Back to Meals List
            </Link>
        </div>
    );
}

export default MealView;