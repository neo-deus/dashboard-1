import React from "react";
import { Button } from "./ui/button";
import { Bell, CloudDownload, Forward, Funnel, Plus } from "lucide-react";

const Tabs = () => {
  return (
    <div className=" flex justify-between items-center px-4 py-2">
      <div className=" flex items-center gap-2">
        <div className=" flex gap-1 border border-gray-300 p-0.5 rounded-md bg-neutral-100">
          <Button variant="outline" size="sm" className=" rounded">
            Overview
          </Button>
          <Button variant="ghost" size="sm" className=" text-gray-400">
            Sales
          </Button>
          <Button variant="ghost" size="sm" className=" text-gray-400">
            Order
          </Button>
        </div>
        <div className="h-8 w-px bg-gray-300 rounded-full" />
        <Button variant="outline" size="sm" className=" ">
          <Plus />
          Add Widget
        </Button>
      </div>
      <div className=" flex justify-center items-center gap-2">
        <Button variant="outline" size="sm" className=" ">
          <Funnel />
          Filter
        </Button>
        <Button variant="outline" size="sm" className=" bg-foreground text-background">
          <CloudDownload />
          Export
        </Button>
      </div>
    </div>
  );
};

export default Tabs;
