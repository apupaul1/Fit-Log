"use client";

import { WorkoutContext } from "@/contexts/WorkoutContext";
import { useContext } from "react";

const SaveStat = () => {
  const { saveStat } = useContext(WorkoutContext);

  const { exercise, mintues, calories } = saveStat;

  return (
    <div className="bg-[#151921] border-3 border-[#232732] p-14 my-10 rounded-2xl flex w-full justify-around">
      <div className="flex-1">
        <h3>Exercises</h3>
        <p className="text-4xl text-[#C2F800] font-bold font-heading">{exercise}</p>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className=" flex-1">
        <h3>Mintues</h3>
        <p className="text-4xl font-heading">{mintues}</p>
      </div>
      <div className="divider divider-horizontal"></div>

      <div className=" flex-1">
        <h3>Calories</h3>
        <p className="text-4xl font-heading">{calories}</p>
      </div>
    </div>
  );
};

export default SaveStat;
