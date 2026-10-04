import { IWorkout } from "@/types/workout.types";
import Image from "next/image";
import { LuClock } from "react-icons/lu";
import { FaFire } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import Link from "next/link";

export interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const {
    id,
    muscleGroups,
    name,
    equipment,
    rating,
    caloriesBurned,
    duration,
    image,
  } = workout;

  return (
    <Link href={`/workout/${id}`}>
      <div className="card bg-[#15171D] rounded-3xl shadow-sm">
        <figure>
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="h-76 object-cover"
          />
        </figure>
        <div className="card-body">
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
          <h2 className="text-white text-2xl uppercase">{name}</h2>
          <p className="text-[#9CA3AF]">{equipment}</p>
          <div className="card-actions text-[16px] text-[#9CA3AF] border-t border-[#20242E] pt-4 mt-3 space-x-5">
            <h3 className="inline-flex items-center gap-1">
              <LuClock />
              {duration} min
            </h3>
            <h3 className="inline-flex items-center gap-1">
              <FaFire />
              {caloriesBurned} Kcal
            </h3>
            <h3 className="inline-flex items-center gap-1">
              <FaRegStar />
              {rating}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
