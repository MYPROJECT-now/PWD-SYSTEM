import UserClientComponent from "@/app/admin/user_validate";
import { Dashboard_header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";

const HealthServicesPage = () => {
  return (
    <div className="p-3 h-screen sm:h-full w-full">
      <UserClientComponent>
        <div className="bg-gray-400 h-[680px] overflow-auto rounded-2xl pt-2">
          <Dashboard_header />
          <div className="mt-4 mx-2 xl:mx-16 bg-white max-h-[600px] overflow-auto">
            <div className="bg-dash font-bold text-white text-lg py-5 pl-5 sticky top-0 z-10">
             Rights
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full h-[320px] relative">
                <Image
                  src="/bg-dashboard.jpg"
                  fill
                  alt="logo"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-dash opacity-50" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col py-8 px-5 gap-5">
                  <div className="flex flex-col text-end gap-5">
                    <div className="flex flex-col gap-1 sm:gap-3">
                      <p className="text-3xlxl:text-5xl text-white font-extrabold">
                      Republic Acts and Batas
                      </p>
                      <p className="text-3xl xl:text-5xl text-white font-extrabold">
                      Pambansa for PWDs
                      </p>
                    </div>

                    <hr className="border-2"/>

                    <div className="flex flex-col">
                      <p className="text-sm xl:text-lg text-white">
                      Laws created by the Philippine <br />
                      Congress and approved by the <br />
                      Philippine presidents.
                      </p>
                     
                    </div>
                    
                  </div>
                </div> 
              </div>

              <div className="w-full h-[150px] sm:h-[200px] px-2 sm:px-10 mt-5 ">
                <div className="w-full h-full flex flex-col border border-black px-5 py-3 gap-2">
                    <Link
                    href="https://ncda.gov.ph/disability-laws/republic-acts/republic-act-9442/">
                    <p className="text-sm sm:text-xl font-bold sm:font-extrabold text-dash">Magna Carta for Disabled Persons, 1992, Republic Act No. 7277</p>
                    </Link>
                    <p className="text-xs sm:text-lg text-blue-600">
                    This Act provides for the rehabilitation, self-development and self-reliance of disabled persons and their integration into the mainstream of society. 
                    </p>
                    <Link
                    href="https://ncda.gov.ph/disability-laws/republic-acts/republic-act-9442/">
                    <p className="text-end underline text-xs sm:text-lg text-blue-600 hover:text-blue-400">
                      Read more...
                    </p>
                    </Link>
                </div>
              </div>

              <div className="w-full h-[150px] sm:h-[200px] px-2 sm:px-10 mt-5 ">
                <div className="w-full h-full flex flex-col border border-black px-5 py-3 gap-2">
                    <Link
                    href="https://ncda.gov.ph/disability-laws/batas-pambansa/batas-pambansa-blg-344/">
                    <p className="text-sm sm:text-xl font-bold sm:font-extrabold text-dash"> Batas Pambansa Blg. 344</p>
                    </Link>
                    <p className="text-xs sm:text-lg text-blue-600">
                    An Act to Enhance the Mobility of Disabled Persons by Requiring Certain Buildings, Institutions, Establishments and Public Utilities to install Facilities and Other Devices                     </p>
                    <Link
                    href="https://ncda.gov.ph/disability-laws/batas-pambansa/batas-pambansa-blg-344/">
                    <p className="text-end underline text-xs sm:text-lg pt-3 text-blue-600 hover:text-blue-400">
                      Read more...
                    </p>
                    </Link>
                </div>
              </div>

              <div className="w-full h-[150px] sm:h-[200px] px-2 sm:px-10 mt-5 ">
                <div className="w-full h-full flex flex-col border border-black px-5 py-3 gap-2">
                    <Link
                    href="https://ncda.gov.ph/disability-laws/republic-acts/republic-act-no-11228/">
                    <p className="text-sm sm:text-xl font-bold sm:font-extrabold text-dash"> Republic Act No. 11228 </p>
                    </Link>
                    <p className="text-xs sm:text-lg text-blue-600">
                    An Act Providing For The Mandatory Philhealth Coverage For All Persons With Disability (PWDs), Amending For The Purpose Republic Act No. 7277, As Amended, Otherwise Known As The “Magna Carta For Persons With Disability”                     </p>
                    <Link
                    href="https://ncda.gov.ph/disability-laws/republic-acts/republic-act-no-11228/">
                    <p className="text-end underline text-xs sm:text-lg  text-blue-600 hover:text-blue-400">
                      Read more...
                    </p>
                    </Link>
                </div>
              </div>

              <div className="w-full h-[150px] sm:h-[200px] px-2 sm:px-10 mt-5 mb-5 ">
                <div className="w-full h-full flex flex-col border border-black px-5 py-3 gap-2">
                    <Link
                    href="https://ncda.gov.ph/disability-laws/republic-acts/republic-act-no-10754-an-act-expanding-the-benefits-and-privileges-of-persons-with-disability-pwd/">
                    <p className="text-sm sm:text-xl font-bold sm:font-extrabold text-dash"> Republic Act NO. 10754</p>
                    </Link>
                    <p className="text-xs sm:text-lg text-blue-600">
                    An Act Expanding The Benefits And Priviledges Of Persons With Disability (PWD) 
                    </p>
                    <Link
                    href="https://ncda.gov.ph/disability-laws/republic-acts/republic-act-no-10754-an-act-expanding-the-benefits-and-privileges-of-persons-with-disability-pwd/">
                    <p className="text-end underline text-xs sm:text-lg mt-5 text-blue-600 hover:text-blue-400">
                      Read more...
                    </p>
                    </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </UserClientComponent>
    </div>
  );
};

export default HealthServicesPage;