import {useState} from "react";
import {getExercises} from "../services/api";
import {useNavigate} from "react-router-dom";


function Home() {
    const [muscle, setMuscle] = useState("");
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    const loadExercises = async (muscle) => {
        const data = await getExercises(muscle);
        setExercises(data);
    };

    const addToWorkout = (exercise) => {
        const savedExercises = JSON.parse(localStorage.getItem("workout")) || [];
        savedExercises.push(exercise);

        localStorage.setItem("workout", JSON.stringify(savedExercises));
        console.log("Added to workout:", exercise.name);
    };

    return (
        <div>
            <h1 className="text-primary mb-4">
                Welcome to the workout planner!</h1>

            <select value={muscle} onChange={(e) => setMuscle(e.target.value)}>
                <option value="">Select a muscle group</option>
                <option value="chest">Chest</option>
                <option value="lats">Lats</option>
                <option value="traps">Traps</option>
                <option value="biceps">Biceps</option>
                <option value="triceps">Triceps</option>
                <option value="shoulders">Shoulder</option>
                <option value="quadriceps">Quadriceps</option>
                <option value="hamstrings">Hamstrings</option>
                <option value="glutes">Glutes</option>
                <option value="calves">Calves</option>
                
            </select>
            <button onClick={() => loadExercises(muscle)} className="mb-3">
                Search Exercises
                </button>
            <ul> 
                {exercises.map((exercise) => (
                    <li key={exercise.name} className="mb-3">
                        <span style={{width: "200px", display: "inline-block"}}>
                        {exercise.name}
                        </span>
                    <button className = "btn btn-success" onClick={() => addToWorkout(exercise)}>
                        Add to workout
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;