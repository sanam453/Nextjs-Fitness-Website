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

function VideoCard({ title, img, time, calories }: VideoCardPropsType) {
  return (
    <Card
      className={`!max-w-3xl bg-[#010715] bg-opacity-50 !border-slate-400 overflow-hidden relative min-h-[18rem] bg-custom h-full w-full`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bg-black/80 h-full w-full inset-0" />
      <div className="relative">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid h-40 place-items-center">
          <Button className="rounded-full text-white" variant="ghost" size="icon">
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

const DATA = [
  {
    title: "Morning Yoga",
    img: "/woman-jump.png",
    time: "20mins",
    calories: "400kcal",
  },
  {
    title: "Strength Training",
    img: "/fitness-woman.png",
    time: "30mins",
    calories: "450kcal",
  },
  {
    title: "Upper Body",
    img: "/workout-girl.png",
    time: "35mins",
    calories: "250kcal",
  },
  {
    title: "Full Body",
    img: "/workout.png",
    time: "40mins",
    calories: "700kcal",
  },
];

function Workouts() {
  return (
    <section className="absolute grid place-items-center inset-0 bg-[url('/assessment-cover.png')] bg-no-repeat bg-cover w-full max-h-min min-h-[100vh]">
      <div className="!max-w-[90rem] mx-auto w-full px-8 mt-40 mb-10 relative">
        <div className="flex justify-between mb-16 items-center">
          <h1 className="text-xl">Choose Workouts</h1>
          <Button variant="ghost" className="flex items-center gap-2">
            More
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
          {DATA.map((props, key) => (
            <VideoCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workouts;
