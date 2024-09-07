import React from "react";

// ui components
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

// icons
import { Timer } from "lucide-react";

export function DurationCard() {
  return (
    <Card className="bg-[#010715] bg-opacity-40 !border-slate-400">
      <CardHeader className="flex flex-row items-center gap-4">
        <Timer className="text-white" />
        <CardTitle className="text-xl font-bold text-white">
          Repeatition Duration
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center">
        <CardDescription>35 minutes whole, 20 reps each 3x20</CardDescription>
      </CardContent>
    </Card>
  );
}

export default DurationCard;
