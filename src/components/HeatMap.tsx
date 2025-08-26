import React from "react";

const Heatmap = () => {
  const values = [
    0, 30, 50, 80, 20, 0, 40, 60, 90, 100, 50, 70, 80, 120, 30, 20, 0, 110, 70,
    60, 90,
  ];

  const colorScale = [
    { max: 0, class: "bg-gray-100" },
    { max: 50, class: "bg-orange-200" },
    { max: 100, class: "bg-orange-400" },
    { max: Infinity, class: "bg-orange-600" },
  ];

  const getColor = (value: number) => {
    const match = colorScale.find((scale) => value <= scale.max);
    return match?.class;
  };

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const times = ["12 AM-8 AM", "8 AM-4 PM", "4 PM-12 AM"];

  return (
    <div className="rounded-lg border-2 border-gray-300  p-4">
      <div className=" flex justify-between items-center mb-4 text-gray-600">
        <h2 className="text-sm font-medium ">Visit by Time</h2>
        <div className="flex items-center gap-1 text-xs  font-medium">
          0
          {colorScale.map((scale, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className={`h-4 w-6 rounded-full ${scale.class}`}></div>
            </div>
          ))}
          10,000+
        </div>
      </div>

      <div className="grid grid-cols-8 grid-rows-4 gap-1 items-center">
        <div></div>
        {days.map((day) => (
          <div key={day} className="text-center text-sm text-gray-500">
            {day}
          </div>
        ))}
        {times.map((time, row) => (
          <React.Fragment key={time}>
            <div className="text-sm text-gray-500 mr-2 text-nowrap">{time}</div>
            {values.slice(row * 7, row * 7 + 7).map((val, i) => (
              <div
                key={`${row}-${i}`}
                className={`h-10  rounded-full ${getColor(val)}`}
              ></div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Heatmap;
