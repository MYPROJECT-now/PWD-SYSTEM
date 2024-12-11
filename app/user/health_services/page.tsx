
"use client";

import { useState } from "react";
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
import { Dashboard_header_user } from "@/components/header/header_user";

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
          <Image src="/home.png" width={50} height={50} alt="logo" />
          <p className="text:sm sm:text-3xl font-extrabold text-white">PWD Health Services</p>
        </div>
        <p className="text-white text-sm sm:text-xl">
        The Comprehensive Program for Persons with Disabilities aims to promote services to all types of 
        PWDs 0-59 years of age and are members of the Self-Help Groups of PWDs. The program focuses on areas 
        of disability prevention, rehabilitation and equalization of opportunities. Moreover, it is intended to 
        enhance PWDs capacity to attain a more meaningful, productive and satisfying way of life and ultimately 
        become self-reliant, productive and contributing members of society.
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

          <p className="text-xl sm:text-sm text-center mt-2">Note Documents must be Original or Certified true copy</p>
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
      <Dashboard_header_user />
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
