import React from "react";
import { cn } from "@/components/lib/utils";
import { GraduationCap, XCircle, TriangleAlert } from "lucide-react";

export default function Content() {
  return (
    <div className="bg-primary-light w-full max-w-[400px] sm:min-w-[450px] lg:max-w-full min-h-[320px] sm:min-h-[400px] h-full rounded-xl flex items-center justify-evenly group">
      <StudyTimer segments={testStudyTimerProps.segments} />
      <SecurityAlert />
    </div>
  );
}

export interface StudyTimerProps {
  segments: Segment[];
}

interface Segment {
  value: number;
  color: string;
}

export const testStudyTimerProps: StudyTimerProps = {
  segments: [
    { value: 57, color: "orange" },
    { value: 24, color: "pink" },
    { value: 26, color: "yellow" },
  ],
};

const formatTime = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const seconds = (totalMinutes * 60) % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const StudyTimer: React.FC<StudyTimerProps> = ({
  segments = testStudyTimerProps.segments,
}) => {
  const totalMinutes = segments.reduce(
    (acc, segment) => acc + segment.value,
    0
  );
  const time = formatTime(totalMinutes);

  return (
    <div className="relative flex size-52 flex-col gap-1 rounded-3xl bg-zinc-600 p-4 text-white shadow-lg group-hover:scale-125 transition-all duration-500">
      <div className="flex items-center justify-between p-2">
        <button
          className={cn(
            "relative flex items-center justify-center px-4 py-2",
            "duration-1000 before:absolute before:inset-0 before:animate-pulse before:rounded-3xl before:border-2 before:border-sky-600"
          )}
        >
          <GraduationCap size={18} className="text-white" />
        </button>
        <div className="flex cursor-pointer items-center justify-center space-x-0.5 rounded-full bg-yellow-600 px-2 py-1 font-bold text-black">
          <XCircle size={10} className="fill-black text-yellow-600" />
          <span className="text-xs font-bold">21</span>
        </div>
      </div>
      <div className="mt-2 p-2">
        <div className="text-xl font-bold tracking-wider">{time}</div>
        <div className="flex justify-start space-x-2 overflow-x-auto text-sm">
          {segments.map((segment, index) => (
            <span
              key={index}
              className="flex items-center justify-center gap-2"
              style={{ color: segment.color }}
            >
              {segment.value}m
              {index !== segments.length - 1 && (
                <div className="h-1 w-1 rounded-full border-2 border-gray-600 bg-gray-600" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 space-x-0.5">
        {segments.map((segment, index) => (
          <SegmentBar key={index} segment={segment} totalSum={totalMinutes} />
        ))}
      </div>
    </div>
  );
};

const SegmentBar: React.FC<{ segment: Segment; totalSum: number }> = ({
  segment,
  totalSum,
}) => {
  const widthPercent = (segment.value / totalSum) * 100;

  return (
    <div
      className="h-full rounded-b-sm rounded-t-sm"
      style={{
        width: `${widthPercent}%`,
        backgroundColor: segment.color,
      }}
    />
  );
};

const SecurityAlert = () => {
  const riskValue = "139 532",
    time = "30m",
    numberOfIssue = 2;

  return (
    <div className="flex size-52 flex-col items-center gap-1 overflow-hidden rounded-3xl bg-gray-700 scale-125 group-hover:scale-95 transition-all duration-500">
      <div className="h-5 w-full bg-striped" />
      <div className="flex h-full flex-col gap-1 px-4 pb-4">
        <div className="mt-1 px-4 text-lg text-gray-300">
          Security is at Risk
        </div>
        <div className="w-full text-center text-2xl font-bold text-white">
          {riskValue}
        </div>
        <div className="my-1 flex w-full flex-1 items-center justify-center gap-2">
          <div className="text-sm text-gray-400">{time} ago</div>
          <div className="rounded-lg bg-zinc-600 px-2 py-1 text-sm text-gray-300">
            Quick scan
          </div>
        </div>
        <div className="mt-auto flex animate-blink-red items-center justify-center gap-2 rounded-2xl border-2 border-red-500 px-10 py-2 font-bold">
          <TriangleAlert className="fill-red-500 stroke-red-800" />
          <div className="text-red-500">{numberOfIssue} Items</div>
        </div>
      </div>
    </div>
  );
};
