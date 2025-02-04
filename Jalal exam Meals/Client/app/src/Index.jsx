import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Index.css';

function Index() {
    const [meals, setMeals] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/meals")
            .then((res) => {
                setMeals(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

  

    return (
        <div className="container">
            <h1 className="title">Meals</h1>
            <Link to="/addmeals" className="btn btn-primary">
                <i className="fas fa-plus"></i> Add meals
            </Link>
            {loaded ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Meal</th>
                            <th>Prep Time</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meals.map((meal, i) => (
                            <tr key={i}>
                                <td>{meal.dish_name}</td>
                                <td>{meal.total_minutes}</td>
                                <td>
                                    <Link to={`/meals/${meal._id}`} className="btn btn-info btn-sm">
                                        <i className="fas fa-eye"></i> Details
                                    </Link>
                                    <Link to={`/meals/${meal._id}/edit`} className="btn btn-warning btn-sm">
                                        <i className="fas fa-edit"></i> Edit
                                    </Link>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="loading">
                    <i className="fas fa-spinner fa-spin"></i> Loading...
                </div>
            )}
        </div>
    );
}

export default Index;