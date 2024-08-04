"use client";

import type { SVGProps } from "react";

const KanbanIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M6 5v11" fill="currentColor" />
      <path d="M12 5v6" fill="currentColor" />
      <path d="M18 5v14" fill="currentColor" />
    </svg>
  );
};

export default KanbanIcon;
