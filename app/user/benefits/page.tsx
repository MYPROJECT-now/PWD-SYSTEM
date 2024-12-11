import UserClientComponent from "@/app/admin/user_validate";
import { Dashboard_header } from "@/components/header/header";
import Image from "next/image";
import Link from "next/link";

const HealthServicesPage = () => {
  return (
    <div className="p-3 h-full w-[430px] sm:w-full">
      <UserClientComponent>
        <div className="bg-gray-400 h-full sm:h-[680px] overflow-auto rounded-2xl pt-2">
          <Dashboard_header />
          <div className="mt-4 mx-2 xl:mx-16 bg-white f-full sm:max-h-[600px] overflow-auto">
            <div className="bg-dash  font-bold text-white text-lg py-5 pl-5 sticky top-0 z-10">
              Benefits and Privileges
            </div>
            <div className=" flex flex-col">
              <div className="w-full h-[320px] relative">
                <Image
                  src="/bg-dashboard.jpg"
                  fill
                  alt="logo"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-dash opacity-50" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col py-8 px-5 gap-5">
                  <div className="flex flex-col text-end gap-5">
                    <div className="flex flex-col gap-1 xl:gap-3">
                      <p className="text-4xl xl:text-5xl text-white font-extrabold">
                      Services of
                      </p>
                      <p className="text-4xl xl:text-5xl text-white font-extrabold">
                      Member Agencies
                      </p>
                    </div>

                    <hr className="border-2"/>

                    <div className="flex flex-col">
                      <p className="text-sm xl:text-lg text-white">
                      List of Member Agencies that <br />
                      compose the National Council on <br />
                      Disability Affairs.
                      </p>
                     
                    </div>
                    
                  </div>
                </div> 
              </div>

              <div className="w-full h-[160px] px-10 mt-5 ">
                <div className="w-full h-full flex flex-row border border-black px-5 py-3 gap-2">
                  <div className="p-2 w-[190px] flex justify-center items-center overflow-hidden border-4 border-dash rounded-lg">
                    <Image
                      src="/benefits_1.png"
                      width={100}
                      height={100} 
                      
                      alt="benefit"
                        />
                  </div>
                  <div className="flex flex-col">
                    <Link
                    href="https://www.dswd.gov.ph/programs-projects-and-services/">
                    <p className="text-sm xl:text-xl font-bold xl:font-extrabold text-dash"> Department of Social Welfare and Development </p>
                    </Link>
                    <p className="text-xs xl:text-lg text-blue-600">
                    The Department of Social Welfare and Development is a government agency responsible for providing <br />
                     assistance 
                    to vulnerable sectors, including those with disabilities.
                    </p>
                    <Link
                    href="https://www.dswd.gov.ph/programs-projects-and-services/">
                    <p className="text-end underline text-xs xl:text-lg text-blue-600 hover:text-blue-400">
                      Read more...
                    </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full h-[160px] px-10 mt-5 ">
                <div className="w-full h-full flex flex-row border border-black px-5 py-3 gap-2">
                  <div className="p-2 w-[200px] flex justify-center items-center overflow-hidden border-4 border-dash rounded-lg">
                    <Image
                      src="/benefits_2.png"
                      width={100}
                      height={100} 
                      
                      alt="benefit"
                        />
                  </div>
                  <div className="flex flex-col">
                    <Link
                    href="https://www.deped.gov.ph/?s=persons+with+disabilities">
                    <p className="text-sm xl:text-xl font-bold xl:font-extrabold text-dash"> Department of Education</p>
                    </Link>
                    <p className="text-xs  xl:text-lg text-blue-600">
                    The Department of Education ensures the inclusivity of all in education, including the persons with disabilities. 
                    </p>
                    <Link
                    href="https://www.deped.gov.ph/?s=persons+with+disabilities">
                    <p className="text-end underline text-xs xl:text-lg mt-[60px] lg:mt-4 text-blue-600 hover:text-blue-400">
                      Read more...
                    </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full h-[160px] px-10 mt-5 ">
                <div className="w-full h-full flex flex-row border border-black px-5 py-3 gap-2">
                  <div className="p-2 w-[190px] flex justify-center items-center overflow-hidden border-4 border-dash rounded-lg">
                    <Image
                      src="/benefits_3.png"
                      width={100}
                      height={100} 
                      
                      alt="benefit"
                        />
                  </div>
                  <div className="flex flex-col">
                    <Link
                    href="https://pwd.doh.gov.ph/home.php">
                    <p className="text-sm xl:text-xl font-bold xl:font-extrabold text-dash"> Department of Health </p>
                    </Link>
                    <p className="text-xs  xl:text-lg text-blue-600">
                    The Department of Health ensures the well-being and health of persons with disabilities in the Philippines.
                    </p>
                    <Link
                    href="https://pwd.doh.gov.ph/home.php">
                    <p className="text-end underline text-xs xl:text-lg mt-[60px] lg:mt-4 text-blue-600 hover:text-blue-400">
                      Read more...
                    </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full h-[160px] px-10 mt-5 mb-5 ">
                <div className="w-full h-full flex flex-row border border-black px-5 py-3 gap-2">
                  <div className="p-2 w-[280px] flex justify-center items-center overflow-hidden border-4 border-dash rounded-lg">
                    <Image
                      src="/benefits_4.png"
                      width={100}
                      height={100} 
                      
                      alt="benefit"
                        />
                  </div>
                  <div className="flex flex-col">
                    <Link
                    href="https://doj.gov.ph/search.html?q=persons+with+disabilities">
                    <p className="text-sm xl:text-xl font-bold xl:font-extrabold text-dash"> Department of Justice </p>
                    </Link>
                    <p className="text-xs  xl:text-lg text-blue-600">
                    The Department of Justice complies with accessibility laws and other legislations that affects PWDs, and ensures that persons with disabilities have equal rights and access to justice.                    </p>
                    <Link
                    href="https://doj.gov.ph/search.html?q=persons+with+disabilities">
                    <p className="text-end underline text-xs xl:text-lg mt-3 text-blue-600 hover:text-blue-400">
                      Read more...
                    </p>
                    </Link>
                  </div>
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