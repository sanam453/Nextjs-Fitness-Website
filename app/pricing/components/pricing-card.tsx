import React from "react";

// ui components
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// icons
import { CheckCircle } from "lucide-react";

interface PricingCardPropsType {
  title: string;
  desc: string;
  price: number;
  label: string;
  options: string[];
}

export function PricingCard({
  title,
  desc,
  price,
  label,
  options,
}: PricingCardPropsType) {
  return (
    <Card className="bg-[#010715] bg-opacity-50 !border-slate-400">
      <CardHeader>
        <CardTitle className="text-white mb-2">{title}</CardTitle>
        <CardDescription className="text-slate-300">{desc}</CardDescription>
        <h1 className="text-white text-8xl py-6">
          <span className="text-2xl">$</span>
          {price}
        </h1>
        <Button variant="secondary">{label}</Button>
      </CardHeader>
      <CardContent className="space-y-4 mt-6">
        {options.map((option, key) => (
          <div key={key} className="flex gap-4 text-slate-300">
            <CheckCircle />
            <p>{option}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default PricingCard;
