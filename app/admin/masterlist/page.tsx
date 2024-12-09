

// Masterlistpage.tsx
import { Dashboard_header } from "@/components/header";
import AdminClientComponent from "../admin_validate";
import Todos from "@/components/todos";
import { getData } from "@/actions/todoAction";



const Masterlistpage = async () => {
   const data = await getData();



  return (
    <div className="h-full p-3 w-full">
      <AdminClientComponent>
        <div className="bg-gray-300 h-full rounded-2xl pt-2">
          <Dashboard_header />
          <div className="mt-4 mx-16 bg-white h-[600px]">
            <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
              Masterlist
            </div>
            <Todos todos={data} />
          </div>
        </div>
      </AdminClientComponent>
    </div>
  );
};

export default Masterlistpage;

