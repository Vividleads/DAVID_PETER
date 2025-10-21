import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
<div
  ref={ref}
  className="flex lg:flex-col lg:items-start sm:items-center
   sm:justify-center gap-6 lg:gap-16 lg:pl-8 lg:pt-8 text-white text-3xl font-bold pt-7"
>
      {inView && (
        <>
          <div>
            <CountUp end={5} duration={3} />+
            <p className="text-sm text-gray-400">Years Experience</p>
          </div>
          <div>
            <CountUp end={20} duration={3} />+
            <p className="text-sm text-gray-400">Projects Completed</p>
          </div>
          <div>
            <CountUp end={15} duration={3} />+
            <p className="text-sm text-gray-400">Happy Clients</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Stats;
