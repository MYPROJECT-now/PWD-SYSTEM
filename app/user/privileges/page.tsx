"use client"
import UserClientComponent from "@/app/admin/user_validate";
import { Dashboard_header } from "@/components/header";
import { UserNotif } from "@/components/notif/user-notif";

const PrivilegesPage = () => {


  return(
    <div className="h-full p-3">
      <UserClientComponent>
      <div className="bg-gray-300 rounded-2xl pt-2 h-full ">
      <Dashboard_header />
      <div>
        <UserNotif />
      </div>
     
      </div>
      </UserClientComponent>
    </div>
  );
};

export default PrivilegesPage;