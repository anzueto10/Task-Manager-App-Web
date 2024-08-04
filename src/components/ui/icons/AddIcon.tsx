"use client";

import type { SVGProps } from "react";

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    strokeLinejoin="round"
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="size-6"
    width="1em"
  >
    <path
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

export default AddIcon;
