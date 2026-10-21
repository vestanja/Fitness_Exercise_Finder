import { useState, useEffect } from "react";

function ExerciseDetails({language}) {


    return (
        <div>

          <h1 className="text-primary mb-4">
            {language === "en" ? "About Workout Planner" : 
            "Tietoa Treenin Suunnittelijasta"}
          </h1>
            

            <p>
                {language === "en" ?
                "This workout planner helps you find exercises to use in your workouts for different muscle groups."
                :
                "Tämä treenin suunnittelusovellus auttaa sinua löytämään treeniliikkeitä eri lihasryhmille."
                }
            </p>

             
            <h2 className="mb-3 ms-3">
                {language === "en" ? "How to use Workout Planner" 
                : "Miten käyttää Treenin Suunnittelijaa"}
            </h2>

            <ul>
                
                <li className="mb-3 d-flex">
                    {language === "en" ?(
                    <>
                        <span style={{width: "30px", display: "inline-block"}}>
                     1.
                     </span>
                     Go to Home page for searching exercises.
                     </>
                    ):(
                    <>
                     <span style={{width: "30px", display: "inline-block"}}>
                     1.</span>Mene kotisivulle hakeaksesi liikkeitä.
                    </> 
                     )}
                    </li>

                <li className="mb-3 d-flex">
                    {language === "en" ?(
                    <>
                     <span style={{width: "30px", display: "inline-block"}}>
                    2.</span> 
                    Use the "Select muscle group" panel for choosing the muscle group you need.
                    </> 
                    ):(
                    <>
                    <span style={{width: "30px", display: "inline-block"}}>
                     2.</span> Käytä "Valitse lihasryhmä"-painiketta valitaksesi haluamasi lihasryhmän.
                     </>
                    )}
                </li>
                    

                <li className="mb-3 d-flex">
                    {language === "en" ?(
                    <>
                     <span style={{width: "30px", display: "inline-block"}}>
                    3.</span> When you find the exercise you want, add it to your workout with the "Add to workout"-button.
                    </> 
                    ):(
                    <>
                    <span style={{width: "30px", display: "inline-block"}}>
                     3.</span> Kun löydät haluamasi liikkeen, lisää se treeniin painamalla "Lisää treeniin"-painikketta.
                     </>
                    )}
                </li>

                <li className="mb-3 d-flex">
                    {language === "en" ?(
                    <>
                     <span style={{width: "30px", display: "inline-block"}}>
                    4.</span> You can see your workout on the "Workout"-page.
                    </> 
                    ):(
                    <>
                    <span style={{width: "30px", display: "inline-block"}}>
                     4.</span> Voit tarkastella treeniäsi "Treeni"-sivulla.
                     </>
                    )}
                </li>

                <li className="mb-3 d-flex">
                    {language === "en" ?(
                    <>
                     <span style={{width: "30px", display: "inline-block"}}>
                    5.</span> You can remove an exercise with the "Remove"-button.
                    </> 
                    ):(
                    <>
                    <span style={{width: "30px", display: "inline-block"}}>
                    5.</span> Voit poistaa liikkeen "Poista"-painikkeella.
                     </>
                    )}
                </li>
            </ul>
            
        </div>
    );
}

export default ExerciseDetails;