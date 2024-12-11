

// Masterlistpage.tsx
import { Dashboard_header } from "@/components/header/header";
import AdminClientComponent from "../admin_validate";
import Todos from "@/components/todos";
import { getData } from "@/actions/todoAction";
import { Add_page } from "@/components/Add_page";
import { CreatePage } from "@/components/create/create_page";
import { ResetPage } from "@/components/reset-pass/reset_page";



const Masterlistpage = async () => {
   const data = await getData();



  return (
    <div className="h-full p-3 w-full">
      <AdminClientComponent>
        <div className="bg-gray-300 h-full rounded-2xl pt-2">
          <Dashboard_header />
          <div className="mt-4 mx-16 bg-white h-[600px]">
            <div className="flex flex-row justify-between bg-dash font-bold text-white text-lg py-5 px-10">
              <div> Masterlist</div>
              <div className="flex flex-row gap-2"><Add_page /> < CreatePage/> <ResetPage /></div>

            </div>
            <Todos todos={data} />
          </div>
        </div>
      </AdminClientComponent>
    </div>
  );
};

export default Masterlistpage;

