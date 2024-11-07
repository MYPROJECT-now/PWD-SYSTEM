"use client"
import { useState, useEffect } from 'react';
import { Dashboard_header } from "@/components/header";
import AdminClientComponent from "../admin_validate";
import { getTotalPwd, getTotalPwdsBySex } from "@/actions/todoAction";
const AdminPage = async () => {

  const [totalPwds, setTotalPwds] = useState(0);
  const [totalMale, setTotalMale] = useState(0);
  const [totalFemale, setTotalFemale] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const totalPwds = await getTotalPwd();
      const totalMale = await getTotalPwdsBySex('Male');
      const totalFemale = await getTotalPwdsBySex('Female');
      setTotalPwds(totalPwds);
      setTotalMale(totalMale);
      setTotalFemale(totalFemale);
    };
    fetchData();
  }, []);
  return(
    <div className=" h-full p-3">
    <AdminClientComponent>
      <div className="bg-gray-400 h-full rounded-2xl pt-2">
      <Dashboard_header />
      <div className="mx-4 mt-4 flex flex-col gap-5">
        <div className="h-[100px] w-[170px] bg-white rounded-lg flex flex-col items-center justify-center">
          <p>Total PWD:</p> 
          <div className="text-lg font-bold text-dash">
          {totalPwds} 
          </div>
        </div>
        <div className="h-[100px] w-[170px] bg-white rounded-lg flex flex-col items-center justify-center">
           <p>Total Male:</p> 
          <div className="text-lg font-bold text-dash">
            {totalMale} 
          </div>

          <p>Total Female:</p> 
          <div className="text-lg font-bold text-dash">
            {totalFemale} 
          </div>
        </div>

      </div>
      </div>
     
   </AdminClientComponent>
  </div>
  );
};

export default AdminPage;