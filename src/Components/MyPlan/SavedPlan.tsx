import { IWorkout } from "@/types/workout.types";
import Image from "next/image";
import Link from "next/link";
import { FaFire, FaRegStar } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import SaveMarkAsButton from "../Homepage/Buttons/SaveMarkAsButton";

const SavedPlan = ({ data }: { data: IWorkout[] }) => {
  if (data.length === 0) {
    return (
      <div className="h-70 border-3 border-[#232732] rounded-2xl p-7 mt-6 border-dashed flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold text-xl">NOTHING HERE YET</h1>
          <p className="text-[#6B7280] text-sm">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href={"/"}
            className="btn rounded-3xl bg-[#CCFF00] text-black font-semibold mt-6"
          >
            Go to workouts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-6">
      {data.map((plan) => (
        <div
          key={plan.id}
          className="bg-[#151921] border-3 border-[#232732] rounded-2xl p-7 flex justify-between items-center"
        >
          <div className="flex gap-4 items-center">
            <div className="w-40">
              <Image
                src={plan.image}
                alt={plan.name}
                width={400}
                height={400}
                className="rounded-2xl"
              ></Image>
            </div>
            <div className="space-y-3">
              <h1 className="font-heading text-4xl font-bold uppercase">
                {plan.name}
              </h1>
              <p className="text-[#6B7280]">{plan.equipment}</p>
              <div className="card-actions text-[16px] text-[#9CA3AF]  space-x-3">
                <h3 className="inline-flex items-center gap-1">
                  <LuClock className="text-[#C2F800] font-bold" />
                  {plan.duration} min
                </h3>
                <h3 className="inline-flex items-center gap-1">
                  <FaFire className="text-[#C2F800] font-bold" />
                  {plan.caloriesBurned} Kcal
                </h3>
                <h3 className="inline-flex items-center gap-1">
                  <FaRegStar className="text-[#C2F800] font-bold" />
                  {plan.rating}
                </h3>
              </div>
            </div>
          </div>
          <div className="space-x-4">
            <Link href={`/workout/${plan.id}`}>
              <button className="btn rounded-3xl border-2 border-[#374151]">
                View Details
              </button>
            </Link>
            <SaveMarkAsButton id={plan.id}></SaveMarkAsButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedPlan;
