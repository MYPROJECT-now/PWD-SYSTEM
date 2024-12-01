
"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CldImage } from 'next-cloudinary';

export const Achievements = ({ data }: { data: Array<{ id: number; title: string; description: string; imageSrc: string }> }) => {
  return (
    <div className="w-[500px] h-[330px] mx-auto flex items-center justify-center ">
      <Carousel opts={{ align: "start", loop: true }} className="text-center rounded-xl">
        <CarouselContent>
          {data.map((achievement) => (
             
            <CarouselItem key={achievement.id}
            className="bg-white h-[330px] w-[200px]  mx-2 basis-1/2 "
            >
            {/* const data = await getAchievements(); add later */}
                <div className="p-3">
                <CldImage
                  width="300"
                  height="300"
                  src={achievement.imageSrc}
                  alt={achievement.title}
                  className="mx-auto w-[120px] h-[150px]"
                />
                </div>

              <p className="text-lg font-bold">{achievement.title}</p>
              <div className=" h-[100px] overflow-auto">
              <p className="text-sm">{achievement.description}</p>
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