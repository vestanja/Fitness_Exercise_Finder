import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/workout">My Workout</Link>
            {" | "}
            <Link to="/about">About</Link>
        </nav>
    );
}

export default NavigationBar;