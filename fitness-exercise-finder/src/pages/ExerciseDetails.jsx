function ExerciseDetails() {
    return (
        <div>
            <h1 className="text-primary mb-4"
            
            >About Workout Planner</h1>
            

            <p>
                This workout planner helps you find exercises to use
                in your workouts for different muscle groups.
            </p>

             
            <h2 className="mb-3 ms-3">How to use Workout Planner</h2>
            

            <ul>
                <li className="mb-3 d-flex">
                    <span style={{width: "30px", display: "inline-block"}}>
                     1.</span>Go to Home page for searching exercises.</li>

                <li className="mb-3 d-flex">
                    <span style={{width: "30px", display: "inline-block"}}>
                    2.</span> Use the "Select muscle group" panel for choosing the muscle group you need.</li>

                <li className="mb-3 d-flex">
                    <span style={{width: "30px", display: "inline-block"}}>
                     3.</span> When you find the exercise you want, add it to your workout with the "Add to workout"-button.</li>

                <li className="mb-3 d-flex">
                    <span style={{width: "30px", display: "inline-block"}}>
                     4.</span>You can see your workout on the "Workout"-page.</li>

                <li className="mb-3 d-flex">
                    <span style={{width: "30px", display: "inline-block"}}>
                    5.</span> You can remove an exercise with the "Remove"-button.</li>
            </ul>
            
        </div>
    );
}

export default ExerciseDetails;