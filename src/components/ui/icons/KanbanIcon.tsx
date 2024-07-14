"use client";

import { IconProps } from "@/types";

const KanbanIcon: React.FC<IconProps> = ({
  className,
  height,
  stroke,
  width,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={stroke}
      stroke="currentColor"
      className={` ${className} w-full h-full`}
      width={width}
      height={height}
    >
      <path d="M6 5v11"></path>
      <path d="M12 5v6"></path>
      <path d="M18 5v14"></path>
    </svg>
  );
};

export default KanbanIcon;
