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

const BarChart = {
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
  colors: "#fff",
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
    size: 5,
    strokeWidth: 0,
    strokeColors: "transparent",
    hover: {
      size: 7,
    },
  },
  stroke: {
    curve: "straight",
    width: 2,
    colors: "transparent",
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
    },
  },
  tooltip: {
    theme: "light",
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

const BarChartSeries = [
  {
    name: "series1",
    data: [
      31, 40, 28, 51, 42, 109, 100, 120, 51, 42, 67, 91, 109, 71, 65, 91, 51,
      42, 31, 53, 67, 89, 98,
    ],
  },
];

export function StepsCard() {
  return (
    <Card className="bg-[#010715] bg-opacity-40 !border-slate-400 overflow-hidden">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex gap-3">
          <Flame className="text-white" />
          <CardTitle className="text-xl font-bold text-white">Steps</CardTitle>
        </div>
        <CardTitle className="text-xl font-bold text-white">400 kcal</CardTitle>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <Chart
          // @ts-ignore
          options={BarChart}
          series={BarChartSeries}
          type="bar"
          width="650"
          height={220}
        />
      </CardContent>
    </Card>
  );
}

export default StepsCard;
