import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

export type StatsCardProps = {
  value: string;
  label: string;
};

export const StatsCard = (props: StatsCardProps) => {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  const [count, setCount] = useState(0);
  const targetValue = parseInt(props.value);

  useEffect(() => {
    if (isInView && !isNaN(targetValue)) {
      let start = 0;
      const duration = 2000;
      const increment = targetValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, targetValue]);

  return (
    <div
      ref={ref}
      className="bg-red-600/10 box-border caret-transparent text-center border-pink-950 p-4 sm:p-6 md:p-8 rounded-xl border-2 border-solid hover:border-red-600/50 hover:bg-red-600/20 transition-all duration-300"
    >
      <div className="text-red-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold box-border caret-transparent tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] lg:tracking-[3.6px] leading-[48px] sm:leading-[56px] md:leading-[60px] lg:leading-[72px] mb-3 md:mb-4">
        {isNaN(targetValue) ? props.value : count}
      </div>
      <div className="text-neutral-400 text-base sm:text-lg md:text-xl box-border caret-transparent tracking-[0.8px] md:tracking-[1px] leading-6 md:leading-7">
        {props.label}
      </div>
    </div>
  );
};
