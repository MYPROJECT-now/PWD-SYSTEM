import { Dashboard_header } from "@/components/header";
import AdminClientComponent from "../admin_validate";
import Notif from "@/components/notif/addNotif";

const Notification = async () => {

    return (
        <div className="h-full p-3 w-full">
        <AdminClientComponent>
          <div className="bg-gray-300 h-full rounded-2xl pt-2">
            <Dashboard_header />
            <div className="mt-4 mx-16 bg-red-500 h-[520px]">
              <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
                Add Notification
              </div>
             <Notif />
            </div>
          </div>
        </AdminClientComponent>
      </div>
    );
};

export default Notification;