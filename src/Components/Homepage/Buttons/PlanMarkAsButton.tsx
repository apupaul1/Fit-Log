"use client";

import { WorkoutContext } from "@/contexts/WorkoutContext";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const PlanMarkAsButton = ({ id }: { id: number }) => {
  const { plan, setPlan } = useContext(WorkoutContext);

  const handleMarkAsDone = () => {
    const filteredData = plan.filter((dt) => dt.id !== id);
    setPlan(filteredData);

    toast.success("Workout done", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const handleRemove = () => {
    const filteredData = plan.filter((dt) => dt.id !== id);
    setPlan(filteredData);

    toast.info("Remove from plan", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <button
        onClick={() => handleMarkAsDone()}
        className="btn rounded-3xl bg-[#CCFF00] text-black font-semibold"
      >
        Mark as Done
      </button>
      <button onClick={() => handleRemove()} className="text-[#6B7280]">
        X
      </button>
    </>
  );
};

export default PlanMarkAsButton;
