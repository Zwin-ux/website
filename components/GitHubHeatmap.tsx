import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";

export interface HeatmapDay {
  date: string; // YYYY-MM-DD
  count: number;
}

function getColor(count: number) {
  // 0: gray, 1-3: green, 4-7: orange, 8+: red glow
  if (count === 0) return "bg-gray-800";
  if (count < 4) return "bg-green-500";
  if (count < 8) return "bg-orange-400";
  return "bg-red-500 animate-heatmap-glow";
}

export default function GitHubHeatmap({
  data,
}: {
  data: HeatmapDay[];
}) {
  // Arrange data into 7 columns (days) x N rows (weeks)
  const [grid, setGrid] = useState<HeatmapDay[][]>([]);

  useEffect(() => {
    // Fill grid for 8 weeks (56 days)
    const days = [...data];
    while (days.length < 56) days.unshift({ date: "", count: 0 });
    // Split into weeks
    const weeks: HeatmapDay[][] = [];
    for (let i = 0; i < 56; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    setGrid(weeks);
  }, [data]);

  return (
    <div className="w-full flex flex-col items-center py-10 fade-in-section">
      <h3 className="text-lg font-semibold text-gray-200 mb-4 tracking-wide uppercase">Lab Activity</h3>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-8 gap-2">
          {grid.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-2">
              {week.map((day, di) => (
                <div
                  key={di}
                  className={`w-5 h-5 rounded-md transition-all duration-500 cursor-pointer border border-gray-900 relative group ${getColor(day.count)} ${day.count > 0 ? "pulse-on-activity" : ""}`}
                  style={{ animationDelay: `${(wi * 7 + di) * 30}ms` }}
                >
                  {day.date && (
                    <div className="absolute z-10 left-8 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                      {format(parseISO(day.date), "MMM d")} — <b>{day.count}</b> commit{day.count === 1 ? "" : "s"}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
