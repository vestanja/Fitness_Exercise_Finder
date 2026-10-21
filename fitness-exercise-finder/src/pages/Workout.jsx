
import { useState, useEffect } from "react";

function Workout({language}) {
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
            <h1 className="text-primary mb-4">
                {language==="en" ? "My Workout"
                : "Oma treeni"
                }
            </h1>

            {workout.length === 0 ? (
                <p>{language==="en" 
                ? "No exercises added yet."
                : "Ei vielä lisättyjä liikkeitä"
                 }
                </p>
            ):(
                <ul>
                    {workout.map((exercise, index) => (
                        <li key={index} className="mb-3">
                            <span style={{width: "200px", display: "inline-block"}}>
                                {exercise.name}
                            </span>
                            
                            <button className="btn btn-danger ms-2" onClick={() => removeExercise(index)}>
                                {language==="en" ? "Remove"
                                : "Poista"}
                            
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Workout;
