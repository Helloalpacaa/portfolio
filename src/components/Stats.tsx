"use client";

import CountUp from "react-countup";

type Stat = {
  num: number;
  text: string;
};

const stats: Stat[] = [
  {
    num: 1,
    text: "Years of experience",
  },
  {
    num: 10,
    text: "Projects completed",
  },
  {
    num: 20,
    text: "Technologies mastered",
  },
  {
    num: 2300,
    text: "Code commits",
  },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold text-accent"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
