import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] border-3 border-[#232732] rounded-2xl flex-col items-center justify-center  px-4 text-center sm:px-6 lg:px-8 mt-6">
      <div className="max-w-md space-y-6">
        {/* Error Code / Visual Anchor */}
        <h1 className="text-6xl font-extrabold tracking-tight text-red-500 sm:text-7xl">
          404
        </h1>
        
        {/* Main Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            PAGE NOT FOUND
          </h2>
          <p className="text-[#6B7280] text-sm">
            The Page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <Link
            href="/"
            className="btn rounded-3xl bg-[#CCFF00] text-black font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
