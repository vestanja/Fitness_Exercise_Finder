
import { useState, useEffect } from "react";

function Workout() {
    const [workout, setWorkout] = useState([]);

    useEffect(() => {
        const savedWorkout = JSON.parse(
            localStorage.getItem("workout") || "[]"
        );

        setWorkout(savedWorkout);
    }, []);

    const removeExercise = (index) => {
        const updatedWorkout = workout.filter(
            (exercise, i) => i !==index
        );

        setWorkout(updatedWorkout);
        localStorage.setItem("workout", JSON.stringify(updatedWorkout));
    }
    
    

    return (
        <div>
            <h1>My Workout</h1>

            {workout.length === 0 ? (
                <p>No exercises added yet.</p>
            ) : (
                <ul>
                    {workout.map((exercise, index) => (
                        <li key={index}>
                            {exercise.name}
                            <button onClick={() => removeExercise(index)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Workout;
