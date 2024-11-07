

// Masterlistpage.tsx
import { Dashboard_header } from "@/components/header";
import AdminClientComponent from "../admin_validate";
import Todos from "@/components/todos";
import { getData } from "@/actions/todoAction";
import { useEffect, useState } from "react";
import { pwdType } from "@/types/todoTypes";

const Masterlistpage = async () => {
   const data = await getData();


  return (
    <div className="h-full p-3 w-full">
      <AdminClientComponent>
        <div className="bg-gray-300 h-full rounded-2xl pt-2">
          <Dashboard_header />
          <div className="mt-4 mx-16 bg-white h-[600px]">
            <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
              Master List
            </div>
            <Todos todos={data} />
          </div>
        </div>
      </AdminClientComponent>
    </div>
  );
};

export default Masterlistpage;

    {/* <a href="/admin/masterlist/editPage/">
            <Button>
              Edit Masterlist
            </Button>
            </a>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" className="py-3 px-6">
                    pwdNo
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Surname
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
               
                </tr>
              </thead>
              <tbody>
                {data.map((pwdTable) => (
                  <tr key={pwdTable.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="py-4 px-6">{pwdTable.pwdNo}</td>
                    <td className="py-4 px-6">{pwdTable.surname}</td>
                    <td className="py-4 px-6">{pwdTable.name}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}