const API_KEY = "7MTW6Vxa1nzeOSBdnSlGaTWV9HnNniZuL8pI1IrW";

export async function getExercises(muscle){
const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
            headers: {
                'X-Api-Key': API_KEY,
            },
        }
    );
    const data = await response.json();
    return data;
}