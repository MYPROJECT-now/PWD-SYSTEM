"use client"
import UserClientComponent from "@/app/admin/user_validate";
import { BulletinList } from "@/components/bulletin/bulletinList";
import { Dashboard_header } from "@/components/header";
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
      <Dashboard_header />
        <UserNotif />
        <div className="flex flex-row mx-10 gap-3 ">
        <div className="mt-4 bg-white h-[600px] w-[800px]">
          <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
            Dashboard
          </div>
          <div className="flex flex-row bg-white h-[535px] gap-10 items-center justify-center">

          <Link href="/user/benefits">
          <button
          >
            <div className=" flex flex-col items-center justify-center h-[300px] w-[300px] rounded-lg  shadow-2xl">
              <div>
                <Image
                src="/pwd.jpg" 
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

            <div className="h-[300px] w-[300px] rounded-lg">
            <Link href="/user/rights">
            <button
            >
              <div className=" flex flex-col items-center justify-center h-[300px] w-[300px] rounded-lg  shadow-2xl">
                <div>
                    <Image
                    src="/pwd.jpg" 
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
        </div>

        <div className="mt-4 bg-white h-[600px] w-[300px]">
          <div className="bg-dash font-bold text-white text-lg py-5 pl-5 mb-2">
            Bulletin
          </div>
          {/* <BulletinModal />
          <div className="w-full text-center">
            <button 
            className="bg-dash p-2 w-[250px] text-center rounded-lg text-white"
            onClick={() => bulletinModal.open()}>
              title
            </button>          
          </div> */}
          <BulletinList />
        </div>
        </div>
      </div>
      </UserClientComponent>
    </div>
  );
};

export default DashboardPage;