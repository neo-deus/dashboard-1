import {
  ChevronDown,
  Funnel,
  Info,
  MoveRight,
  Scan,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";
import { ChartRadialStacked } from "./charts/Extras5";
import { ChartBarDefault } from "./charts/Extras6";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const DetailedChart = () => {
  const [position, setPosition] = useState("Last Year");

  return (
    <div className=" px-4">
      <div className="grid grid-cols-[25%_75%] rounded-lg border-2 border-gray-300 ">
        <div className="grid grid-rows-[90%_10%] border-r-2 border-gray-300">
          <div className="p-4 ">
            <div className=" flex items-center gap-1 text-neutral-600 text-sm font-medium">
              Sales Performance <Info className=" w-4" />
            </div>
            <div className="flex justify-center mt-5 ">
              <ChartRadialStacked />
            </div>
            <div className="h-px  mx-3 my-5 bg-gray-300 rounded-full" />
            <div>
              <div className=" flex items-start gap-1 font-medium">
                You&apos;re team is great!
                <Sparkles color="#84852e" className=" w-5" />
              </div>
              <p className=" text-sm mt-2 mb-6 leading-4 text-neutral-500">
                The team is performing well above average, meeting or exceeding
                targets in several areas.
              </p>
            </div>
          </div>
          <div className="px-6 py-1.5 gap-3 flex border-t-2 border-gray-300 items-center  justify-center font-medium">
            Improve your score <MoveRight />
          </div>
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div className=" flex justify-between items-center">
            <div className=" flex items-center gap-1 text-neutral-600 text-sm font-medium">
              Analytics <Info className=" w-4" />
            </div>
            <div className=" flex gap-2">
              <Button variant="outline" size="sm" className=" ">
                <Funnel />
                Filter
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className=" flex items-center"
                  >
                    {position} <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-20">
                  <DropdownMenuLabel>Select Year</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="This Year">
                      This Year
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Last Year">
                      Last Year
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" size="sm" className=" h-8 w-8">
                <Scan />
              </Button>
            </div>
          </div>

          <ChartBarDefault />
        </div>
      </div>
    </div>
  );
};

export default DetailedChart;
