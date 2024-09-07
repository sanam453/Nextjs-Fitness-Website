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
import { Plus, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MealPlannerCard() {
  return (
    <Card className="bg-[#010715] bg-opacity-50">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-4">
          <Utensils className="text-white" />
          <CardTitle className="text-xl font-bold text-white">
            Meal Planner
          </CardTitle>
        </div>
        <Button variant="secondary" size="icon">
          <Plus />
        </Button>
      </CardHeader>
      <CardContent className="bg-[url('/vegie.png')] relative min-h-[14rem] bg-cover bg-no-repeat bg-right-top h-full w-full">
        {/* <div className="absolute bg-black/35 h-full w-full inset-0"/> */}
        <div className="flex justify-between">
          <CardDescription className="text-slate-300">
            <p>Breakfast</p>
            <p>400 kcal</p>
          </CardDescription>
          <CardDescription className="text-slate-300">
            <p>Lunch</p>
            <p>700 kcal</p>
          </CardDescription>
          <CardDescription className="text-slate-300">
          <p>Dinner</p>
          <p>500 kcal</p>
        </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}

export default MealPlannerCard;
