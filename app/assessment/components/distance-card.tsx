"use client";

import React from "react";

// ui components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// icons
import { Flame } from "lucide-react";

// charts import
import dynamic from "next/dynamic";

// @ts-ignore
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const AreaChart = {
  chart: {
    type: "bar",
    height: 150,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#FF0064", "#F9DD0A"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.01,
      stops: [0, 100],
    },
  },
  title: {
    show: "",
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  markers: {
    size: 0,
    strokeWidth: 0,
    strokeColors: "solid",
    hover: {
      size: 7,
    },
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      horizontal: false,
    },
  },
  grid: {
    show: false,
    borderColor: "#EEEEEE",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      show: false, // Hide x-axis labels
    },
  },
  yaxis: {
    labels: {
      show: false, // Hide x-axis labels
    },
  },
};

const AreaChartSeries = [
  {
    name: "series1",
    data: [11, 80, 50, 100, 139, 100, 120, 67, 91, 129, 101, 75, 91],
  },
  {
    name: "series2",
    data: [21, 95, 30, 90, 149, 90, 150, 97, 71, 119, 91, 95, 81],
  },
];

export function DistanceCard() {
  return (
    <Card className="bg-[#010715] bg-opacity-40 !border-slate-400 overflow-hidden">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex gap-3">
          <Flame className="text-white" />
          <CardTitle className="text-xl font-bold text-white">Steps</CardTitle>
        </div>
        <CardTitle className="text-xl font-bold text-white">400 kcal</CardTitle>
      </CardHeader>
      <CardContent className="!p-0 w-full">
        <Chart
          // @ts-ignore
          options={AreaChart}
          series={AreaChartSeries}
          type="area"
          width="650"
          height={220}
        />
      </CardContent>
    </Card>
  );
}

export default DistanceCard;
