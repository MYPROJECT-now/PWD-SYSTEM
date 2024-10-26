
import { Dashboard_header } from "@/components/header";
import AdminClientComponent from "../admin_validate";
// import {  getTotalPwd, getTotalPwdsBySex } from "@/db/queries";
const AdminPage = async () => {

  // const totalPwds = await getTotalPwd();
  // const totalMale = await getTotalPwdsBySex('Male');
  // const totalFemale = await getTotalPwdsBySex('Female');

  
  return(
    <div className=" h-full p-3">
    <AdminClientComponent>
      <div className="bg-gray-400 h-full rounded-2xl pt-2">
      <Dashboard_header />
      <div className="mx-4 mt-4 bg-blue-400 flex flex-col gap-5">
        <div className="h-[100px] w-[170px] bg-white rounded-lg flex flex-col items-center justify-center">
          <p>Total PWD:</p> 
          <div className="text-lg font-bold text-dash">
          {/* {totalPwds}  */}
          </div>
        </div>
        <div className="h-[100px] w-[170px] bg-white rounded-lg flex flex-col items-center justify-center">
           <p>Total Male:</p> 
          <div className="text-lg font-bold text-dash">
            {/* {totalMale}  */}
          </div>

          <p>Total Female:</p> 
          <div className="text-lg font-bold text-dash">
            {/* {totalFemale}  */}
          </div>
        </div>

      </div>
      </div>
     
   </AdminClientComponent>
  </div>
  );
};

export default AdminPage;