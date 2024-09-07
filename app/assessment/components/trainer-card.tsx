import React from "react";

// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// icons
import { Dumbbell } from "lucide-react";

// ui components
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function TrainerCard() {
  return (
    <Card className="bg-[#010715] bg-opacity-40 !border-slate-400">
      <CardHeader className="flex flex-row items-center gap-4">
        <Dumbbell className="text-white" />
        <CardTitle className="text-xl font-bold text-white">
          Experienced Trainer
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center">
        <div className="z-0 !flex flex-row items-center -space-x-2 *:ring-1 *:ring-white">
          <Avatar className="z-0 size-10">
            <AvatarImage
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Avatar>
          <Avatar className="z-10 size-10">
            <AvatarImage
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Avatar>
          <Avatar className="z-20 size-10">
            <AvatarImage
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Avatar>
          <Avatar className="z-30 size-10">
            <AvatarImage
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Avatar>
          <Avatar className="z-40 size-10">
            <AvatarImage
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=3172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Avatar>
        </div>
        <p className="pl-4 font-medium text-white">50+</p>
      </CardContent>
    </Card>
  );
}

export default TrainerCard;
