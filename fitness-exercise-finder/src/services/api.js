const API_KEY = "7MTW6Vxa1nzeOSBdnSlGaTWV9HnNniZuL8pI1IrW";

export async function getExercises(muscle) {
    try {
        const response = await fetch(
            `https://api.api-ninjas.com/v1/exercises?muscle=${encodeURIComponent(muscle)}`,
            {
                headers: {
                    "X-Api-Key": API_KEY,
                },
            }
        );

        if (!response.ok) {
            throw new Error("Exercises not founded.");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API-virhe:", error);
        throw error;
    }
}
