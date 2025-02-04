import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './MealEdit.css';
import { Link } from "react-router-dom";

function MealEdit() {
    const { id } = useParams();
    const [dishName, setDishName] = useState("");
    const [dishNameError, setDishNameError] = useState("");
    const [totalMinutes, setTotalMinutes] = useState("");
    const [totalMinutesError, setTotalMinutesError] = useState("");
    const [directions, setDirections] = useState("");
    const [directionsError, setDirectionsError] = useState("");
    const [ingredientOne, setIngredientOne] = useState("");
    const [ingredientTwo, setIngredientTwo] = useState("");
    const [ingredientThree, setIngredientThree] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/meals/${id}`)
            .then((res) => {
                const meal = res.data;
                setDishName(meal.dish_name);
                setTotalMinutes(meal.total_minutes);
                setDirections(meal.directions);
                setIngredientOne(meal.ingredient_one);
                setIngredientTwo(meal.ingredient_two);
                setIngredientThree(meal.ingredient_three);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/meals/${id}/edit`, { 
            dish_name: dishName, 
            total_minutes: totalMinutes, 
            directions, 
            ingredient_one: ingredientOne, 
            ingredient_two: ingredientTwo, 
            ingredient_three: ingredientThree 
        })
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => {
                const errorResponse = err.response?.data?.errors;
                console.log(errorResponse);
                if (errorResponse) {
                    Object.keys(errorResponse).forEach(key => {
                        if (key === "dish_name") {
                            setDishNameError(errorResponse[key].message);
                        }
                        if (key === "total_minutes") {
                            setTotalMinutesError(errorResponse[key].message);
                        }
                        if (key === "directions") {
                            setDirectionsError(errorResponse[key].message);
                        }
                    });
                }
            });
    };

    return (
        <div className="container">
            <h1 className="title">Edit Meal</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label>Dish Name:</label>
                    <input 
                        type="text" 
                        value={dishName} 
                        onChange={(e) => setDishName(e.target.value)} 
                        className="form-control"
                    />
                    {dishNameError && <p className="error">{dishNameError}</p>}
                </div>
                <div className="form-group">
                    <label>Total Minutes:</label>
                    <input 
                        type="number" 
                        value={totalMinutes} 
                        onChange={(e) => setTotalMinutes(e.target.value)} 
                        className="form-control"
                    />
                    {totalMinutesError && <p className="error">{totalMinutesError}</p>}
                </div>
                <div className="form-group">
                    <label>Directions:</label>
                    <textarea 
                        value={directions} 
                        onChange={(e) => setDirections(e.target.value)} 
                        className="form-control"
                    />
                    {directionsError && <p className="error">{directionsError}</p>}
                </div>
                <div className="form-group">
                    <label>Ingredient One:</label>
                    <input 
                        type="text" 
                        value={ingredientOne} 
                        onChange={(e) => setIngredientOne(e.target.value)} 
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Ingredient Two:</label>
                    <input 
                        type="text" 
                        value={ingredientTwo} 
                        onChange={(e) => setIngredientTwo(e.target.value)} 
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Ingredient Three:</label>
                    <input 
                        type="text" 
                        value={ingredientThree} 
                        onChange={(e) => setIngredientThree(e.target.value)} 
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    <i className="fas fa-save"></i> update Meal
                </button>
                <Link to="/" className="btn btn-secondary">
                    <i className="fas fa-arrow-left"></i> Back to Meals List
                </Link>
            </form>
        </div>
    );
}

export default MealEdit;