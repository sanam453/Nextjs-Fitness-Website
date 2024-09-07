import React from "react";

// components
import {
  DistanceCard,
  DurationCard,
  HealthCard,
  MealPlannerCard,
  StepsCard,
  TrainerCard,
} from "./components";

function Assessment() {
  return (
    <section className="absolute inset-0 bg-[url('/assessment-cover.png')] bg-no-repeat bg-cover w-full max-h-min min-h-[100vh]">
      <div className="max-w-[90rem] mx-auto px-8 mb-10">
        <h1 className="md:text-6xl text-4xl text-center mt-28 mb-10 max-w-[45rem] mx-auto !leading-tight">
          Get Fit, Get Strong & Get Healthy
        </h1>
        <div className="grid gap-4 xl:grid-cols-12 grid-flow-row-dense grid-cols-6">
          <div className="space-y-4 lg:col-span-3 col-span-full">
            <TrainerCard />
            <DurationCard />
          </div>
          <div className="col-span-6">
            <DistanceCard />
          </div>
          <div className="lg:col-span-3 col-span-full">
            <HealthCard />
          </div>
          <div className="col-span-6">
            <StepsCard />
          </div>
          <div className="col-span-6">
            <MealPlannerCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Assessment;
