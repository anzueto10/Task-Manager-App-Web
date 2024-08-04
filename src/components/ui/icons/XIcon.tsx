"use client";

import type { SVGProps } from "react";

const XIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
      className="size-6"
      height="1em"
      width="1em"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
        fill="currentColor"
      />
    </svg>
  );
};

export default XIcon;
