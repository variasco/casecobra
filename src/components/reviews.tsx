"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import Image from "next/image";
import { HTMLAttributes, useLayoutEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Phone from "./phone";

export default function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        width={193}
        height={143}
        src="/what-people-are-buying.png"
        alt='a signature "what people are buying"'
        aria-hidden
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
}

const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
] as const;

function splitArray<T>(array: Readonly<T[]>, numParts: number): T[][] {
  return array.reduce<T[][]>((acc, cur, i) => {
    const index = i % numParts;

    if (!acc[index]) {
      acc[index] = [];
    }

    acc[index].push(cur);

    return acc;
  }, []);
}

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  const columns = splitArray(PHONES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= column1.length + column3[0].length,
                "lg:hidden": reviewIndex >= column1.length,
              })
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      )}
    </div>
  );
}

interface ReviewColumnProps {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}

function ReviewColumn(props: ReviewColumnProps) {
  const { reviews, className, msPerPixel = 0, reviewClassName } = props;
  const columnRef = useRef<HTMLDivElement>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      columnRef.current && setColumnHeight(columnRef.current.offsetHeight);
    });

    columnRef.current && resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, index) => (
        <Review
          key={index}
          imgSrc={imgSrc}
          className={reviewClassName?.(index % reviews.length)}
        />
      ))}
    </div>
  );
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

function Review(props: ReviewProps) {
  const { imgSrc, className, ...restProps } = props;

  const index = Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length);
  const animationDelay = POSSIBLE_ANIMATION_DELAYS[index];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...restProps}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
}

const POSSIBLE_ANIMATION_DELAYS = [
  "0s",
  "0.1s",
  "0.2s",
  "0.3s",
  "0.4s",
  "0.5s",
];
