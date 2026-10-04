import { IWorkout } from "@/types/workout.types";
import WorkoutCard from "./WorkoutCard";

const getWorkouts = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      cache: "force-cache"
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const WorkOuts = async () => {
  const workouts: IWorkout[] = await getWorkouts();

  return (
    <div id="library" className="mb-16">
      <div className="mb-3">
        <h1 className="text-white text-xl font-bold">THE LIBRARY</h1>
        <p className="text-[#9CA3AF] text-sm">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                workouts.map(workout => <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default WorkOuts;
