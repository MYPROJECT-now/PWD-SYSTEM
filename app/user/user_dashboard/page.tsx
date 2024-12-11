"use client"
import UserClientComponent from "@/app/admin/user_validate";
import { BulletinList } from "@/components/bulletin/bulletinList";
import { Dashboard_header_user } from "@/components/header/header_user";
import { UserNotif } from "@/components/notif/user-notif";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = () => {
  // const { open } = useBenefitsModal();
  // const { open } = useRightsModal();

  // const { open: benefitsOpen } = useBenefitsModal();
  // const { open: rightsOpen } = useRightsModal();

  // const benefitsModal = useBenefitsModal();
  // const rightsModal = useRightsModal();


  return(
    <div className="h-full p-3">
      <UserClientComponent>
      <div className="bg-gray-300 rounded-2xl pt-2 h-full ">
      <Dashboard_header_user />
        <UserNotif />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 ">
          {/* dashboard */}
          <div className="mt-4 bg-white h-full w-[350px] sm:w-[800px]"> 
            <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
              Dashboard
            </div>
            
            <div className="flex flex-col sm:flex-row my-[100px] sm:my-0 bg-white h-[535px] gap-10 items-center justify-center">
              <Link href="/user/benefits">
              <button
              >
                <div className=" flex flex-col items-center justify-center h-[280px] w-[280px] rounded-lg  border-r-4 border-b-4 border-r-black border-b-black">
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
                  <div className=" flex flex-col items-center justify-center h-[280px] w-[280px] rounded-lg border-r-4 border-b-4 border-r-black border-b-black">
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
          <div className="mt-4 bg-white h-[600px] w-[350px] sm:w-[300px]">
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