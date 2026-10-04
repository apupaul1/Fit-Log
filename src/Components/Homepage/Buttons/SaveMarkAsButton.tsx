"use client";

import { WorkoutContext } from "@/contexts/WorkoutContext";
import { useContext } from "react";

const SaveMarkAsButton = ({ id }: { id: number }) => {
  const { savePlan, setSavePlan } = useContext(WorkoutContext);

  const handleMarkAsDone = () => {
    const filteredData = savePlan.filter((dt) => dt.id !== id);
    setSavePlan(filteredData);
  };

  return (
    <>
      <button onClick={() => handleMarkAsDone()} className="text-[#6B7280]">
        X
      </button>
    </>
  );
};

export default SaveMarkAsButton;
