"use client";

import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CldImage } from 'next-cloudinary';
import { Button } from "../ui/button";

export const Achievements_admin = ({ data, onDelete }: { data: Array<{ id: number; title: string; description: string; imageSrc: string }>; onDelete: (id: number) => void }) => {
  const [achievements, setAchievements] = useState(data);

  // Update achievements when new data is received
  useEffect(() => {
    setAchievements(data);
  }, [data]);

  return (
    <div className="w-[250px] sm:w-[500px] xl:w-[700px] h-[400px] flex items-center justify-center gap-1">
      <Carousel opts={{ align: "start", loop: true }} className="text-center w-full">
        <CarouselContent>
          {achievements.map((achievement) => (
            <CarouselItem key={achievement.id} className="h-[370px] w-full flex flex-col items-center justify-center overflow-hidden sm:basis-1/2 mx-2">
              <div className="relative w-[340px] h-[380px]">
                <CldImage fill src={achievement.imageSrc} alt={achievement.title} className="object-cover" />
              </div>
              <p className="text-lg text-white font-bold mb-2">{achievement.title}</p>
              <div className="h-[220px] overflow-auto">
                <p className="text-start text-sm text-white">{achievement.description}</p>
              </div>
              <div className="mt-3">              
                <Button 
                variant="destructive"
                size="sm" onClick={() => onDelete(achievement.id)}>
                  Delete
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};