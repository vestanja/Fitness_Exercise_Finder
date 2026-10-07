import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

import Home from "./pages/Home";
import Workout from "./pages/Workout";
import ExerciseDetails from "./pages/ExerciseDetails";

function App() {
    return (
    <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/exercises/:id" element={<ExerciseDetails />} />
        </Routes>
    </BrowserRouter > 
    );
}

export default App;