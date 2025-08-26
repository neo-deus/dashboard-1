"use client";

import Dashboard from "@/components/Dashboard";
import DetailedChart from "@/components/DetailedChart";
import Navbar from "@/components/Navbar";
import Summary from "@/components/Summary";
import Tabs from "@/components/Tabs";
import HeatMap from "@/components/HeatMap";
import PieChart from "@/components/PieChart";

export default function Home() {
  return (
    <div className=" w-full ml-[15%]">
      <Dashboard>
        <Navbar />
        <Tabs />
        <Summary />
        <DetailedChart />
        <div className=" p-4 flex justify-between">
          <div className=" w-[57%]">
            <HeatMap />
          </div>
          <div className=" w-[42%]">
            <PieChart />
          </div>
        </div>
      </Dashboard>
    </div>
  );
}
