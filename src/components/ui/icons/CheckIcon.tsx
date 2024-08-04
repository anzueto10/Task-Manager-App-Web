"use client";

import type { SVGProps } from "react";

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="size-6"
    height="1em"
    width="1em"
    stroke="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

export default CheckIcon;
