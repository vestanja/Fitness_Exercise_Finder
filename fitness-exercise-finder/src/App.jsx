import {BrowserRouter} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
    <BrowserRouter>
        <NavigationBar />
        <h1>Exercise Finder</h1>
    </BrowserRouter > 
    );
}

export default App;