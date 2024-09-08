import React from "react";

// ui components
import { Button } from "@/components/ui/button";

// icons
import { ArrowRight } from "lucide-react";

// components
import VideoCard from "./components/video-card";

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
