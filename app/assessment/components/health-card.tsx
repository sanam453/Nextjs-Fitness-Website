import React from "react";

// ui components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// icons
import { BookHeart, Footprints, HeartPulse, PersonStanding } from "lucide-react";


interface HealthPropsType {
  title: string;
  icon: React.ReactNode;
  info: string;
}

function Health({title, icon, info}: HealthPropsType) {
  return (
    <div className="flex items-center gap-4">
      <div className="border border-slate-300 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <CardDescription className="text-slate-300">
          {title}
        </CardDescription>
        <CardDescription className="text-slate-300 mt-1">
         {info}
        </CardDescription>
      </div>
    </div>
  );
}

const HEALTH_DATA = [
  {
    title: "Outdoor Walk",
    icon: <Footprints className="text-slate-300 h-6 w-6" />,
    info: "2.53km"
  },
  {
    title: "Core Training",
    icon: <PersonStanding className="text-slate-300 h-6 w-6" />,
    info: "0.22"
  },
  {
    title: "Indoor Walk",
    icon: <BookHeart className="text-slate-300 h-6 w-6" />,
    info: "1.45km"
  },
]

export function HealthCard() {
  return (
    <Card className="bg-[#010715] bg-opacity-40 !border-slate-400">
      <CardHeader className="flex flex-row items-center gap-4">
        <HeartPulse className="text-white z-10" />
        <CardTitle className="z-10 text-xl font-bold text-white">
          Health
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {HEALTH_DATA.map((props, key) => (
          <Health key={key} {...props} />
        ))}
      </CardContent>
    </Card>
  );
}

export default HealthCard;
