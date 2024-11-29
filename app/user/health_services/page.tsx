import UserClientComponent from "@/app/admin/user_validate";
import { Dashboard_header } from "@/components/header";
import Image from "next/image";

const HealthServicesPage = () => {
  return (
    <div className="h-full p-3 w-full">
      <UserClientComponent>
        <div className="bg-gray-400 h-full rounded-2xl pt-2">
          <Dashboard_header />
          <div className="mt-4 mx-16 bg-white h-[600px]">
            <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
              Health Services
            </div>
            <div className="w-full h-[530px] flex justify-center items-center">
              <div className="w-[600px] h-[300px] relative">
                <Image
                  src="/pwd.jpg"
                  fill
                  alt="logo"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col p-4 gap-5">
                    <div className="flex flex-row items-center gap-3">
                    <Image
                        src="/pwd.jpg"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                    <p>
                        Health Services
                    </p>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Voluptatem officia animi cupiditate consequatur veniam temporibus natus deserunt odio inventore placeat,
                         impedit quas quaerat repellendus sequi, quia, asperiores 
                         assumenda architecto reiciendis?
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Voluptatem officia animi cupiditate consequatur veniam temporibus natus deserunt odio inventore placeat,
                       
                    </p>

                    <button
                    className="w-[100px] h-[40px] bg-white rounded-lg flex flex-row items-center justify-center p-3"
                    >
                        View More
                    </button>
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