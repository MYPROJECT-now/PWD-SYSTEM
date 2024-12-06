// import UserClientComponent from "@/app/admin/user_validate";
// import { Dashboard_header } from "@/components/header";
// import Image from "next/image";

// const HealthServicesPage = () => {
//   return (
//     <div className="h-full p-3 w-full">
//       <UserClientComponent>
//         <div className="bg-gray-400 h-full rounded-2xl pt-2">
//           <Dashboard_header />
//           <div className="mt-4 mx-16 bg-white h-[600px]">
//             <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
//               Health Services
//             </div>
//             <div className="w-full h-[530px] flex justify-center items-center">
//               <div className="w-[600px] h-[300px] relative">
//                 <Image
//                   src="/pwd.jpg"
//                   fill
//                   alt="logo"
//                 />
//                 <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50" />
//                 <div className="absolute top-0 left-0 w-full h-full flex flex-col p-4 gap-5">
//                     <div className="flex flex-row items-center gap-3">
//                     <Image
//                         src="/pwd.jpg"
//                         width={30}
//                         height={30}
//                         alt="logo"
//                     />
//                     <p>
//                         Health Services
//                     </p>
//                     </div>

//                     <p>
//                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
//                         Voluptatem officia animi cupiditate consequatur veniam temporibus natus deserunt odio inventore placeat,
//                          impedit quas quaerat repellendus sequi, quia, asperiores 
//                          assumenda architecto reiciendis?
//                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
//                         Voluptatem officia animi cupiditate consequatur veniam temporibus natus deserunt odio inventore placeat,
                       
//                     </p>

//                     <button
//                     className="w-[100px] h-[40px] bg-white rounded-lg flex flex-row items-center justify-center p-3"
//                     >
//                         View More
//                     </button>
//                 </div> 
//               </div>
//             </div>
//           </div>
//         </div>
//       </UserClientComponent>
//     </div>
//   );
// };

// export default HealthServicesPage;
"use client";

import { useState } from "react";
import { Dashboard_header } from "@/components/header";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // Ensure you have this path correct

const HealthServicesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // Number of pages

  // Static content for each page
  const content = [
<div className="mt-4 mx-2 sm:mx-16 h-[550px] overflow-y-auto" key="page1">
<div className="bg-dash font-bold text-white text-lg py-5 pl-5 sticky top-0 z-10">Health Services</div>
<div className="w-full h-full flex justify-center items-center" >
    <div className="w-full h-full relative">
    <Image src="/health.jpg" fill alt="logo" />
    <div className="absolute top-0 left-0 w-full h-full bg-dash opacity-70" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center  gap-5  ">
        <div className=" mt-10 sm:mt-[70px] px-10 lg:px-[200px]">
        <div className="flex flex-row items-center gap-3 mb-3">
          <Image src="/pwd.jpg" width={30} height={30} alt="logo" />
          <p className="text:sm sm:text-3xl font-extrabold text-white">PWD Health Services</p>
        </div>
        <p className="text-white text-sm sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem officia animi cupiditate
          consequatur veniam temporibus natus deserunt odio inventore placeat...
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem officia animi cupiditate
          consequatur veniam temporibus natus deserunt odio inventore placeat...
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem officia animi cupiditate
          consequatur veniam temporibus natus deserunt odio inventore placeat...
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem officia animi cupiditate
        </p>
      </div>
      </div>
  </div>
</div>
</div>,

<div className="mt-4  mx-2 sm:mx-16 h-[550px] overflow-y-auto" key="page2">
<div className="bg-dash font-bold text-white text-lg py-5 pl-5 sticky top-0 z-10">Health Services</div>
<div className="w-full h-full flex justify-center items-center" >
    <div className="w-full h-full relative">
    <Image src="/health.jpg" fill alt="logo" />
    <div className="absolute top-0 left-0 w-full h-full bg-dash opacity-70" /> 
      <div className="absolute top-0 left-0 w-full h-full flex flex-col px-5 sm:px-20 pt-10 sm:pt-[60px]  gap-5">
        <div className="flex items-center gap-3 text-start">
          <p className="text-xl sm:text-3xl font-extrabold text-white">MEDICAL ASSISTANCE</p>
        </div>
        <div className="text-white">
        <div className="text-white">
          <div className="text-lg sm:text-2xl">
            <ol className="list-decimal pl-8">
              <li>
                Request letter
                <div className="pl-8">
                  Addressed to: Hon. Roseller H. Rizal<br />
                  thru: Mr. Luistro M. Apacionado
                </div>
              </li>
              <li>Copy of Medical Certificate</li>
              <li>Medicine Prescription with Price Quotation</li>
              <li>Photocopy of claimant&apos;s voter&apos;s ID or certification</li>
              <li>Photocopy of PWD ID (beneficiary)</li>
            </ol>
          </div>

          <p className="text-[10px] sm:text-sm text-center mt-2">Note Documents must be Original or Certified true copy</p>
          <hr className="border-2" />
        </div>
        </div>
      </div>
  </div>
</div>
</div>,

<div className="mt-4 mx-2 sm:mx-16 h-[550px] overflow-y-auto" key="page3">
<div className="bg-dash font-bold text-white text-lg py-5 pl-5 sticky top-0 z-10">Health Services</div>
<div className="w-full h-full flex justify-center items-center" >
    <div className="w-full h-full relative">
    <Image src="/health.jpg" fill alt="logo" />
    <div className="absolute top-0 left-0 w-full h-full bg-dash opacity-70" /> 
      <div className="absolute top-0 left-0 w-full h-full flex flex-col px-5 sm:px-20 pt-10 sm:pt-[60px]  gap-5">
        <div className="flex items-center gap-3 text-start">
          <p className="text-xl sm:text-3xl font-extrabold text-white">THERAPY ASSISTANCE</p>
        </div>
        <div className="text-white">
        <div className="text-white">
          <div className="text-lg sm:text-2xl">
            <ol className="list-decimal pl-8">
              <li>
                Request letter
                <div className="pl-8">
                  Addressed to: Hon. Roseller H. Rizal<br />
                  thru: Mr. Luistro M. Apacionado
                </div>
              </li>
              <li>Copy of Medical Certificate</li>
              <li>Therapy Price Quotation</li>
              <li>Photocopy of claimant&apos;s voter&apos;s ID or certification</li>
              <li>Photocopy of PWD ID (beneficiary)</li>
            </ol>
          </div>

          <p className="text-[10px] sm:text-sm text-center mt-2">Note Documents must be Original or Certified true copy</p>
          <hr className="border-2" />
        </div>
        </div>
      </div>
  </div>
</div>
</div>,

<div className="mt-4 mx-2 sm:mx-16 h-[550px] overflow-y-auto" key="page4">
<div className="bg-dash font-bold text-white text-lg py-5 pl-5 sticky top-0 z-10">Health Services</div>
<div className="w-full h-full flex justify-center items-center" >
    <div className="w-full h-full relative">
    <Image src="/health.jpg" fill alt="logo" />
    <div className="absolute top-0 left-0 w-full h-full bg-dash opacity-70" /> 
      <div className="absolute top-0 left-0 w-full h-full flex flex-col p-5 sm:px-20 pt-10 sm:pt-[60px]  gap-5">
        <div className="flex items-center gap-3 text-start">
          <p className="text-lg sm:text-3xl font-extrabold text-white">REQUIREMENTS FOR AVAILING ASSITIVE DEVICES</p>
        </div>
        <div className="text-white">
        <div className="text-white">
          
          <div className="text-lg sm:text-2xl">
            <ol className="list-decimal pl-8">
              <li>
                Request letter
                <div className="pl-8">
                  Addressed to: Hon. Roseller H. Rizal<br />
                  thru: Mr. Luistro M. Apacionado
                </div>
              </li>
              <li>PWD ID Addressed in Calamba</li>
            </ol>
          </div>

          <p className="text-sm text-center mt-[104px]">  Note: For wheelchair request one (1) whole body picture</p>
          <hr className="border-2" />
        </div>
        </div>
      </div>
  </div>
</div>
</div>,
  ];

  // Handle changing page
  const changePage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="h-full p-3 w-full">
      <div className="bg-gray-400 h-full rounded-2xl pt-2">
        <Dashboard_header />
        {content[currentPage - 1]} {/* Display content based on the current page */}

        {/* Pagination controls */}
        <Pagination className="flex justify-center pt-2 pb-2" >
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => changePage(currentPage - 1)}
                isActive={currentPage !== 1} // Correct prop name
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => changePage(1)}
                isActive={currentPage === 1} // Correct prop name
              >
                1
              </PaginationLink>
            </PaginationItem>
            {currentPage > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                onClick={() => changePage(2)}
                isActive={currentPage === 2} // Correct prop name
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => changePage(3)}
                isActive={currentPage === 3} // Correct prop name
              >
                3
              </PaginationLink>
            </PaginationItem>
            {currentPage < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                onClick={() => changePage(totalPages)}
                isActive={currentPage === totalPages} // Correct prop name
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() => changePage(currentPage + 1)}
                isActive={currentPage !== totalPages} // Correct prop name
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default HealthServicesPage;
