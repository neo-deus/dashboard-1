import { cn } from "@/lib/utils";
import React from "react";

const Dashboard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className=" p-4">
      <div
        className={cn(
          "bg-white rounded-2xl overflow-hidden border-2 border-neutral-300  space-y-2 pb-4",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
