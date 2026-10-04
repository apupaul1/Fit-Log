export interface IWorkout {
    id: number,
    name: string,
    image: string,
    muscleGroups: string[]
    equipment: string
    difficulty: string
    duration: number,
    caloriesBurned: number,
    sets: number,
    reps: string,
    rating: string
    description: string
    instructions: string[]
}