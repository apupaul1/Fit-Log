import AddButton from "@/Components/Homepage/Buttons/AddButton";
import SaveButton from "@/Components/Homepage/Buttons/SaveButton";
import { IWorkout } from "@/types/workout.types";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export interface WorkoutDetailsProps {
  params: Promise<{ id: string }>;
}

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsProps) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data: IWorkout = await res.json();

  if (!data) {
    notFound();
  }

  const {
    description,
    difficulty,
    instructions,
    reps,
    sets,
    muscleGroups,
    name,
    equipment,
    rating,
    caloriesBurned,
    duration,
    image,
  } = data;

  return (
    <div className="my-10 px-30">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="w-120 rounded-2xl">
          <Image src={image} alt={image} width={400} height={600} />
        </figure>
        <div className="card-body space-y-5">
          <h2 className="text-white text-4xl">{name}</h2>
          <p className="text-[#9CA3AF]">{description}</p>
          <div className="flex gap-3">
            {muscleGroups.map((group, index) => (
              <div
                key={index}
                className="badge font-bold text-black rounded-2xl bg-[#C2F800] uppercase"
              >
                {group}
              </div>
            ))}
          </div>

          <div className="overflow-x-auto border border-[#9CA3AF60] bg-[#151922] rounded-2xl">
            <table className="table rounded-2xl">
              <tbody className="text-white">
                {/* row 1 */}
                <tr>
                  <td className="font-bold text-[#9CA3AF]">EQUIPMENT</td>
                  <td className="text-right">{equipment}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="font-bold text-[#9CA3AF]">DIFICULTY</td>
                  <td className="text-right">{difficulty}</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#9CA3AF]">SETS</td>
                  <td className="text-right">{sets}</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#9CA3AF]">REPS</td>
                  <td className="text-right">{reps}</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#9CA3AF]">DURATION</td>
                  <td className="text-right">{duration} min</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td className="font-bold text-[#9CA3AF]">CALORIES</td>
                  <td className="text-right">{caloriesBurned} Kcal</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#9CA3AF]">RATING</td>
                  <td className="text-right">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">INSTRUCTIONS</h3>
            <ul className="space-y-1">
              {instructions.map((ins, index) => (
                <li key={index}>
                  <span className="mr-1">{index + 1}.</span> {ins}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-actions space-x-2">
            <AddButton workout={data}></AddButton>
            <SaveButton workout={data}></SaveButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
