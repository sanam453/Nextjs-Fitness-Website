import React from "react";
// ui components
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// icons
import { Clock, Flame, ArrowRight, PlayCircleIcon } from "lucide-react";

interface VideoCardPropsType {
  title: string;
  img: string;
  time: string;
  calories: string;
}

export function VideoCard({ title, img, time, calories }: VideoCardPropsType) {
  return (
    <Card
      className={`bg-[#010715] bg-opacity-50 !border-slate-400 overflow-hidden relative min-h-[18rem] bg-custom h-full w-full`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bg-[#010715]/80 h-full w-full inset-0" />
      <div className="relative">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid h-40 place-items-center">
          <Button
            className="rounded-full text-white"
            variant="ghost"
            size="icon"
          >
            <PlayCircleIcon strokeWidth={1} className="h-16 w-16" />
          </Button>
        </CardContent>
        <CardFooter className="flex flex-row gap-8 justify-end">
          <div className="flex flex-row items-center gap-2">
            <Clock className="text-white h-5 w-5" />
            <CardTitle className="text-base font-medium text-slate-300">
              {time}
            </CardTitle>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Flame className="text-white h-5 w-5" />
            <CardTitle className="text-base font-medium text-slate-300">
              {calories}
            </CardTitle>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

export default VideoCard;
