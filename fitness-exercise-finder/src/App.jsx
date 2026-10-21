import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import {useState} from "react";

import Home from "./pages/Home";
import Workout from "./pages/Workout";
import ExerciseDetails from "./pages/ExerciseDetails";

function App() {
    const [language, setLanguage] = useState("en");
    
    return (
    
    <BrowserRouter basename="/Fitness_exercise_Finder">
        
    
        <NavigationBar />

        <div className="text-end mt-2 mb-3">
            <button
                className={`btn btn-sm me-2 ${
                    language === "en" ? "btn-primary" : "btn-outline-secondary"
                }`}
             onClick={() => setLanguage("en")}
            >
                English
            </button>

            <button
                className={`btn btn-sm ${
                    language === "fi" ? "btn-primary" : "btn-outline-secondary"
                }`}
             onClick={() => setLanguage("fi")}
            >
                Suomi
            </button>
        </div>

        <Routes>
          <Route path="/" element={<Home language={language}/>} />
          <Route path="/workout" element={<Workout language={language}/>} />
          <Route path="/about" element={<ExerciseDetails language={language}/>} />
        </Routes>
        
    </BrowserRouter> 
    );
}

export default App;