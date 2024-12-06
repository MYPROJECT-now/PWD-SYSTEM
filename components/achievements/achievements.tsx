"use client"

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CldImage } from 'next-cloudinary';

export const Achievements = ({ data }: { data: Array<{ id: number; title: string; description: string; imageSrc: string }> }) => {
  const [achievements, setAchievements] = useState(data);

  // Update achievements when new data is received
  useEffect(() => {
    setAchievements(data);
  }, [data]);

  return (
    <div className="w-[700px] h-[330px] flex items-center justify-center gap-3 ">
      <Carousel opts={{ align: "start", loop: true }} className="text-center w-full">
        <CarouselContent>
          {achievements.map((achievement) => (
            <CarouselItem key={achievement.id}
              className=" h-[330px] w-full flex flex-col items-center justify-center basis-1/2"
            >
              <div className="relative w-[340px] h-[200px]">
                <CldImage
                  fill
                  src={achievement.imageSrc}
                  alt={achievement.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-lg text-white font-bold mb-2">{achievement.title}</p>
              <div className=" h-[120px] overflow-auto">
                <p className="text-start text-sm text-white">{achievement.description}</p>
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


// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel"
// import Image from "next/image";

  
// export const Achievements = () => {
//   return (
//     <div className="w-[800px] h-[330px] bg-blue-400  mx-auto">
//       <Carousel
//         opts={{
//             align: "start",
//             loop: true,
//           }}
        
//         className="text-center"
//           >
//         <CarouselContent >
//             <CarouselItem
//             className="basis-1/2 
//             ">
//             <Image
//                 src="/pwd.jpg" 
//                 width={200} 
//                 height={200} 
//                 alt="logo" 
//                 className="mx-auto"
//             />
//             <p>title</p>
//             <p>description</p>
//             </CarouselItem>
//             <CarouselItem
//              className="basis-1/2
//              ">
//             <Image
//                 src="/pwd.jpg" 
//                 width={200} 
//                 height={200} 
//                 alt="logo" 
//                 className="mx-auto"
//             />
//               <p>title</p>
//               <p>description</p>
//             </CarouselItem>
//             <CarouselItem
//              className="basis-1/2
//              ">
//             <Image
//                 src="/pwd.jpg" 
//                 width={200} 
//                 height={200} 
//                 alt="logo" 
//                 className="mx-auto"
//             />
//               <p>title</p>
//               <p>description</p>
//             </CarouselItem>
//             <CarouselItem
//              className="basis-1/2
//              ">
//             <Image
//                 src="/pwd.jpg" 
//                 width={200} 
//                 height={200} 
//                 alt="logo" 
//                className="mx-auto"
//             />
//               <p>title</p>
//               <p>description</p>
//             </CarouselItem>
//             <CarouselItem
//              className="basis-1/3
//              ">
//             <Image
//                 src="/pwd.jpg" 
//                 width={200} 
//                 height={200} 
//                 alt="logo" 
//                className="mx-auto"
//             />
//               <p>title</p>
//               <p>description</p>
//             </CarouselItem>
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//         </Carousel>
//     </div>
// );
// };