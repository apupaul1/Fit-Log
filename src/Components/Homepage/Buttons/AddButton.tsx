"use client";

import { WorkoutContext } from "@/contexts/WorkoutContext";
import { IWorkout } from "@/types/workout.types";
import { useContext, useState } from "react";
import { TiFolderAdd } from "react-icons/ti";
import { MdFileDownloadDone } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const AddButton = ({ workout }: { workout: IWorkout }) => {
  const { plan, setPlan } = useContext(WorkoutContext);

  const handleAddtoPlan = () => {
    const isExist = plan.find((p) => p.id === workout.id);

    if (isExist) {
      toast.error("Sorry! Alread Added", {
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
      return;
    }

    if (plan.length >= 5) {
      toast.error("Sorry! You can only add up to 5 workout", {
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
      return;
    }

    setPlan([...plan, workout]);
    toast.success("Added to today's plan", {
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
    <button
      onClick={() => handleAddtoPlan()}
      className="btn bg-[#C2F800] font-bold text-black rounded-lg disabled:opacity-40  disabled:pointer-none"
      disabled={plan.length >= 5}
    >
      <TiFolderAdd size={20} /> Add to today's plan
    </button>
  );
};

export default AddButton;
