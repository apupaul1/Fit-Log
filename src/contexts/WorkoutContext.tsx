"use client";

import { IWorkout } from "@/types/workout.types";
import React, { createContext, SetStateAction, useState } from "react";

export interface IPlanStat {
  exercise: number;
  mintues: number;
  calories: number;
}

export interface IWorkoutInfo {
  plan: IWorkout[];
  setPlan: React.Dispatch<SetStateAction<IWorkout[]>>;
  savePlan: IWorkout[];
  setSavePlan: React.Dispatch<SetStateAction<IWorkout[]>>;
  planStat: IPlanStat;
  saveStat: IPlanStat;
}

export const WorkoutContext = createContext<IWorkoutInfo>({
  plan: [],
  setPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
  planStat: { exercise: 0, mintues: 0, calories: 0 },
  saveStat: { exercise: 0, mintues: 0, calories: 0 },
});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [savePlan, setSavePlan] = useState<IWorkout[]>([]);

  const totalExercises = plan.length;
  const totalSaveExercises = savePlan.length;

  const totalMinutes = plan.reduce((acc, currentWorkout) => {
    return acc + (currentWorkout.duration || 0);
  }, 0);

  const totalSaveMinutes = savePlan.reduce((acc, currentWorkout) => {
    return acc + (currentWorkout.duration || 0);
  }, 0);

  const totalCalories = plan.reduce((acc, currentWorkout) => {
    return acc + (currentWorkout.caloriesBurned || 0);
  }, 0);

  const totalSaveCalories = savePlan.reduce((acc, currentWorkout) => {
    return acc + (currentWorkout.caloriesBurned || 0);
  }, 0);

  const planStat = {
    exercise: totalExercises,
    mintues: totalMinutes,
    calories: totalCalories,
  };

  const saveStat = {
    exercise: totalSaveExercises,
    mintues: totalSaveMinutes,
    calories: totalSaveCalories,
  };

  const workoutInfo: IWorkoutInfo = {
    plan,
    setPlan,
    savePlan,
    setSavePlan,
    planStat,
    saveStat,
  };

  return (
    <WorkoutContext.Provider value={workoutInfo}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
