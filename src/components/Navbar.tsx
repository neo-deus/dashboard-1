import React from "react";
import { Button } from "./ui/button";
import { Bell, Forward, LayoutGrid, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <div className=" h-[9%] border-b-2 border-b-gray-300 w-full flex items-center justify-between p-4">
      <div className=" text-xl font-medium">Dashboard</div>

      <div className=" flex  gap-2 items-center">
        <div className=" flex gap-2">
          <Button variant="outline" size="sm" className=" h-8 w-8">
            <Forward />
          </Button>
          <Button variant="outline" size="sm" className=" h-8 w-8">
            <Bell />
          </Button>
        </div>
        <div className="h-6 w-0.5 bg-gray-300 rounded-full" />
        <div className=" flex items-center gap-2">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className=" text-[#C38D77] bg-[#F3E9E2] flex justify-center items-center">
                +3
              </AvatarFallback>
            </Avatar>
          </div>
          <Button variant="outline" size="sm" className=" h-8 w-8">
            <Users />
          </Button>
        </div>
        <div className="h-6 w-0.5 bg-gray-300 rounded-full" />
        <Button variant="outline" size="sm" className=" ">
          <LayoutGrid />
          Customise Widget
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
