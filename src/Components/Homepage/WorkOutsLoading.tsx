const WorkOutsLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-28">
      {Array.from({ length: 12 }).map((_, index) => (
        <div className="card bg-[#15171D] rounded-3xl shadow-sm overflow-hidden animate-pulse">
          {/* Image Skeleton */}
          <div className="h-76 w-full bg-[#252832]" />

          <div className="card-body">
            {/* Category Skeleton */}
            <div className="flex gap-3">
              <div className="h-6 w-20 rounded-2xl bg-[#252832]" />
              <div className="h-6 w-16 rounded-2xl bg-[#252832]" />
            </div>

            {/* Workout Name Skeleton */}
            <div className="h-7 w-3/4 rounded bg-[#252832] mt-2" />

            {/* Equipment Skeleton */}
            <div className="h-4 w-1/2 rounded bg-[#252832] mt-1" />

            {/* Stats Skeleton */}
            <div className="border-t border-[#20242E] pt-4 mt-3">
              <div className="flex gap-5">
                <div className="h-5 w-20 rounded bg-[#252832]" />
                <div className="h-5 w-24 rounded bg-[#252832]" />
                <div className="h-5 w-12 rounded bg-[#252832]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkOutsLoading;
