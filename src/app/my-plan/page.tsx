"use client";

import SavedPlan from "@/Components/MyPlan/SavedPlan";
import SaveStat from "@/Components/MyPlan/SaveStat";
import TodayPlan from "@/Components/MyPlan/TodayPlan";
import TodayStat from "@/Components/MyPlan/TodayStat";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { IWorkout } from "@/types/workout.types";
import React, { useContext, useState } from "react";

const MyPlanPage = () => {
  const [selectedTab, isSelectedTab] = useState("today");

  const { plan, savePlan } = useContext(WorkoutContext);

  const [sortBy, setSortBy] = useState("duration");

  const handleSorting = (data: IWorkout[]) => {
    const workout = [...data];

    if (sortBy === "duration") {
      workout.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      workout.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    workout.sort((a, b) => {
      const ratingA = Number(a.rating ?? 0);
      const ratingB = Number(b.rating ?? 0);
      return ratingB - ratingA;
    });

    return workout;
  };

  return (
    <div className="my-10 px-20">
      <h1 className="text-3xl font-bold text-white">MY PLAN</h1>
      <p className="mt-1 text-sm text-[#9CA3AF]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div>
        {selectedTab === "today" ? (
          <TodayStat></TodayStat>
        ) : (
          <SaveStat></SaveStat>
        )}
      </div>

      {/* name of each tab group should be unique */}
      <div className="flex justify-between">
        <div className="tabs tabs-box bg-[#151921] w-68 p-2 rounded-2xl border-2 border-[#232732] flex gap-4">
          <input
            type="radio"
            name="my_tabs_1"
            className={`${selectedTab === "today" ? "tab-active w-1/2 rounded-2xl border-2 border-[#232732] bg-[#15171D]" : ""} tab`}
            aria-label="Today's Plan"
            defaultChecked
            onClick={() => isSelectedTab("today")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`${selectedTab === "save" ? "tab-active w-1/2 rounded-2xl border-2 border-[#232732] bg-[#15171D]" : ""} tab`}
            aria-label="Saved"
            onClick={() => isSelectedTab("save")}
          />
        </div>

        <div className="flex gap-2 items-center">
          <p className="w-25 text-[#8A92A0]">Sort By</p>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
            className="select bg-[#13161D] rounded-xl text-white border-2 border-[#232732]"
          >
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>
      </div>

      <div>
        {selectedTab === "today" ? (
          <TodayPlan data={handleSorting(plan)}></TodayPlan>
        ) : (
          <SavedPlan data={handleSorting(savePlan)}></SavedPlan>
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;
