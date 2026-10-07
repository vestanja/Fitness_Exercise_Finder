import {useState} from "react";
import {getExercises} from "../services/api";

function Home() {
    const [muscle, setMuscle] = useState("");
    const [exercises, setExercises] = useState([]);

    const loadExercises = async (muscle) => {
        const data = await getExercises(muscle);
        setExercises(data);
    };

    return (
        <div>
            <h1>Welcome to the workout planner!</h1>

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
            <button onClick={() => loadExercises(muscle)}>
                Search Exercises
                </button>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.name}>{exercise.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;