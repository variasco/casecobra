import { LucideProps } from "lucide-react";

export const Icons = {
  underline: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 687 155">
      <g
        stroke="currentColor"
        strokeWidth="7"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M20 98c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"
          opacity=".3"
        />
        <path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" />
      </g>
    </svg>
  ),
  separator: (props: LucideProps) => (
    <svg
      {...props}
      className="h-full w-full text-gray-300"
      viewBox="0 0 12 82"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M0.5 0V31L10.5 41L0.5 51V82"
        stroke="currentcolor"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  ),
};
