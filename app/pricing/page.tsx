import React from "react";

// components
import PricingCard from "./components/pricing-card";

const DATA = [
  {
    title: "Basic",
    desc: "Achieve Your Fitness Goals with Our Energizing Workout!",
    price: 0,
    options: [
      "Single Session",
      "Group Training Session",
      "Personal Training Packages",
      "Group Training Packages",
      "Monthly Membership",
      "Group Class Membership",
    ],
    label: "Start Now",
  },
  {
    title: "Premium",
    desc: "Experience Unparalleled Fitness Excellence with Our Premium Workout!",
    price: 5.99,
    options: [
      "Premium Packages",
      "Individual Personal Training",
      "Elite Wellness Package",
      "Luxury Group Training (up to 6 participants)",
      "Premium Group Package",
      "Premium Membership",
    ],
    label: "Join Now",
  },
  {
    title: "Enterprise",
    desc: "Transform Your Workplace with Our Comprehensive Enterprise Fitness Workout Program!",
    price: 3.45,
    options: [
      "Basic Corporate Wellness Package",
      "Standard Corporate Wellness Package",
      "Premium Corporate Wellness Package",
      "Custom Enterprise Solutions",
      "Membership and Access Plans",
      "Virtual Fitness Membership",
    ],
    label: "Start Now",
  },
];

function Pricing() {
  return (
    <section className="absolute grid place-items-center inset-0 bg-[url('/assessment-cover.png')] bg-no-repeat bg-cover w-full max-h-min min-h-[100vh]">
      <div className="!max-w-[90rem] mx-auto w-full px-8 mt-40 mb-10 relative">
        <h1 className="md:text-6xl text-4xl text-center font-bold mb-20">
          Pay Once, Use Forever
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {DATA.map((props, key) => (
            <PricingCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
