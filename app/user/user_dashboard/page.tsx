"use client"
import UserClientComponent from "@/app/admin/user_validate";
import { BulletinList } from "@/components/bulletin/bulletinList";
import { Dashboard_header } from "@/components/header";
import { UserNotif } from "@/components/notif/user-notif";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = () => {

  return(
    <div className="h-full p-3">
      <UserClientComponent>
      <div className="bg-gray-300 rounded-2xl pt-2 h-full ">
      <Dashboard_header />
        <UserNotif />
        <div className="flex flex-col sm:flex-row justify-center gap-3 ">
          {/* dashboard */}
          <div className="mt-4 bg-white h-full w-[400px] sm:w-[800px]"> 

            <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
              Dashboard
            </div>
            
            <div className="flex flex-col sm:flex-row my-[100px] sm:my-0 bg-white h-[535px] gap-10 items-center justify-center">

              <Link href="/user/benefits">
              <button
              >
                <div className=" flex flex-col items-center justify-center h-[300px] w-[300px] rounded-lg  border-r-4 border-b-4 border-r-black border-b-black">
                  <div className="mb-3">
                    <Image
                    src="/benefits.jpeg" 
                    width={200} 
                    height={200} 
                    alt="logo" 
                    />
                  </div>
                  <p>
                    Benefits and Privileges
                  </p>
                </div>
                </button>
                </Link>

                <Link href="/user/rights">
                <button
                >
                  <div className=" flex flex-col items-center justify-center h-[300px] w-[300px] rounded-lg border-r-4 border-b-4 border-r-black border-b-black">
                    <div className="mb-3">
                        <Image
                        src="/rights.jpeg" 
                        width={200} 
                        height={200} 
                        alt="logo" 
                        />
                    </div>
                    <p>
                      Rights
                    </p>  
                  </div>
                </button>
                </Link>
            </div>
          </div>

          {/* bulletin */}
          <div className="mt-4 bg-white h-[600px] w-[400px] sm:w-[300px]">
            <div className="bg-dash font-bold text-white text-lg py-5 pl-5 mb-2">
              Bulletin
            </div>
            <BulletinList />
          </div>
      </div>

      </div>
        </UserClientComponent>
    </div>
  );
};

export default DashboardPage;