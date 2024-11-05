import React from "react";

const CooperationRotate = () => {
  return (
    <div className="absolute hidden md:block -bottom-[35px] -right-[35px] z-10">
      <div className="rotateme animate-rotateme">
        <div className="w-[210px] h-[210px] border-[0.4px] border-border-1 rounded-full"></div>
        <div className="w-[124px] h-[124px] border-[0.4px] border-border-1 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            className="mb-8 absolute bottom-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
          >
            <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
          </svg>
        </div>
        <div className="w-[82px] h-[82px] border-[0.4px] border-border-1 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            className="mb-4 absolute bottom-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
          >
            <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CooperationRotate;