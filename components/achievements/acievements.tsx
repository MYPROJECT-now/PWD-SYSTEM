import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image";

  
export const Achievements = () => {
  return (
    <div className="w-[400px] h-[530px]  mx-auto">
      <Carousel
        opts={{
            align: "start",
            loop: true,
          }}
        
        className="text-center"
          >
        <CarouselContent >
            <CarouselItem>
                sample 1
            <Image
                src="/pwd.jpg" 
                width={400} 
                height={400} 
                alt="logo" 
            />
            </CarouselItem>
            <CarouselItem>
                sample 2
            <Image
                src="/pwd.jpg" 
                width={400} 
                height={400} 
                alt="logo" 
            />
            </CarouselItem>
            <CarouselItem>
                sample 3
            <Image
                src="/pwd.jpg" 
                width={400} 
                height={400} 
                alt="logo" 
            />
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
);
};