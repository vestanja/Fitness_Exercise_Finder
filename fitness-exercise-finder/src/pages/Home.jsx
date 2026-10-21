import {useState} from "react";
import {getExercises} from "../services/api";
import {useNavigate} from "react-router-dom";



function Home({language}) {
    const [muscle, setMuscle] = useState("");
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();


    const [error, setError]=useState("");

    const loadExercises = async (muscle) => {
        setError("");
        setExercises([]);

        if (!muscle) {
            language=== "en" ? setError("Please select a muscle group first.") 
            : setError("Valitse ensin lihasryhmä.");
            return;
        }

        try {
            const data = await getExercises(muscle);
            setExercises(data);

            if (data.length === 0) {
                language=== "en" ? setError("No exercises found for this muscle group.")
                : setError("Tälle lihasryhmälle ei löytynyt liikkeitä.");
            }
        } catch (error) {
            language=== "en" ? setError("Failed to load exercises. Please try again.")
            : setError("Liikkeiden lataaminen epäonnistui. Yritä uudelleen.");
        }
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
                {language === "en" ? "Welcome to the workout planner!" 
                : "Tervetuloa Treenin Suunnittelijaan!"}
            </h1>

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
                {language==="en" ? "Search Exercises"
                : "Etsi liikkeitä"
                }
                </button>
                    {error && (
                    <p className="text-danger mt-2" role="alert">
                        {error}
                    </p>
                    )}
            <ul> 
                {exercises.map((exercise) => (
                    <li key={exercise.name} className="mb-3">
                        <span style={{width: "200px", display: "inline-block"}}>
                        {exercise.name}
                        </span>
                    <button className = "btn btn-success" onClick={() => addToWorkout(exercise)}>
                        {language=== "en" ? "Add to workout"
                        : "Lisää treeniin"
                        }
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;