"use client";

import * as React from "react";
import {
  Box,
  ChartPie,
  ChevronRight,
  ChevronsLeft,
  CircleQuestionMark,
  CommandIcon,
  Mail,
  MessageSquareText,
  PanelsTopLeft,
  Rocket,
  Search,
  Settings,
  ShoppingBag,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";

const data = [
  {
    name: "Dashboard",
    url: "#",
    icon: PanelsTopLeft,
  },
  {
    name: "Product",
    url: "#",
    icon: Box,
  },
  {
    name: "Order",
    url: "#",
    icon: ShoppingBag,
  },
];

const data2 = [
  {
    name: "Email",
    url: "#",
    icon: Mail,
  },
  {
    name: "Analytics",
    url: "#",
    icon: ChartPie,
  },
];

const data3 = [
  {
    name: "Help Center",
    url: "#",
    icon: CircleQuestionMark,
  },
  {
    name: "Feedback",
    url: "#",
    icon: MessageSquareText,
  },
  {
    name: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="none" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button
              className=" w-full bg-background shadow-lg border-2 border-neutral-300 p-2 text-black hover:bg-neutral-100"
              size="lg"
            >
              <div className=" w-full flex justify-between items-center">
                <div className=" flex justify-between items-center gap-2">
                  <div className="w-[27px] h-[27px] flex-shrink-0">
                    <Image
                      src="/uxerflow.jpg"
                      width={27}
                      height={27}
                      alt=""
                      className="rounded object-cover w-full h-full"
                    />
                  </div>
                  <div className=" flex flex-col items-start">
                    <div>Uxerflow Inc.</div>
                    <div className=" text-xs font-thin -mt-1 text-neutral-500">
                      Free Plan
                    </div>
                  </div>
                </div>
                <div className=" p-0.5 rounded border border-neutral-200">
                  <ChevronsLeft />
                </div>
              </div>
            </Button>
          </SidebarMenuItem>
          <SidebarMenuItem className=" mt-3">
            <div className="relative w-full text-neutral-500">
              <Search className="absolute left-3 top-[30%] h-4 w-4 " />
              <Input
                type="text"
                placeholder="Search"
                className="pl-9 pr-12 rounded bg-neutral-200 "
              />
              <div className="absolute z-2 right-3 top-[20%] flex items-center gap-1 font-medium ">
                <CommandIcon className="h-5 w-5 text-xs border bg-white rounded p-0.5 " />
                <div className="h-5 w-5 text-xs border rounded bg-white  px-1.5">
                  K
                </div>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>MAIN MENU</SidebarGroupLabel>
          <div className="h-px  mx-1 mb-1  bg-gray-300 rounded-full" />
          <SidebarMenu>
            {data.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  className="text-neutral-800 hover:bg-white hover:border hover:border-neutral-300 hover:rounded-md hover:font-medium  text-xs" 
                >
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <div className="h-px  mx-3  bg-gray-300 rounded-full" />
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>TOOLS</SidebarGroupLabel>
          <SidebarMenu>
            {data2.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  className="text-neutral-800 hover:bg-white hover:border hover:border-neutral-300 hover:rounded-md hover:font-medium text-xs" 
                >
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden mt-auto">
          <SidebarMenu>
            {data3.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  className="text-neutral-800 hover:bg-white hover:border hover:border-neutral-300 hover:rounded-md hover:font-medium  text-xs"
                >
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button
              className=" w-full bg-background shadow-lg border-2 border-neutral-300 p-2 text-black hover:bg-neutral-100"
              size="lg"
            >
              <div className=" w-full flex justify-between items-center">
                <div className=" flex justify-between items-center gap-2">
                  <div className="p-2 bg-chart-1 rounded-md flex-shrink-0 text-white">
                    <Rocket />
                  </div>

                  <div className=" text-xs font-medium text-left">
                    Upgrade & unlock all <br />
                    features
                  </div>
                </div>
                <div className=" p-0.5 h-4 w-4 text-chart-1 ">
                  <ChevronRight />
                </div>
              </div>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
