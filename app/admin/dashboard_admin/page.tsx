// "use client"
// import { useState, useEffect } from 'react';
// import { Dashboard_header } from "@/components/header/header";
// import AdminClientComponent from "../admin_validate";
// import { getTotalPwd, getStatusDistribution  } from "@/actions/todoAction";
// import AgeDistributionChart from '@/components/analytics/ageChart';
// import DisabilityDistributionChart from '@/components/analytics/disabilityChart';
// import Image from 'next/image';

// const AdminPage = async () => {

//   const [totalPwds, setTotalPwds] = useState(0);
//   const [statusDistribution, setStatusDistribution] = useState({
//     active: 0,
//     inactive: 0,
//     deceased: 0,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const totalPwds = await getTotalPwd();
//       setTotalPwds(totalPwds);

//       const statusDistribution = await getStatusDistribution() as { active: number; inactive: number; deceased: number };
//       setStatusDistribution(statusDistribution);
//     };
//     fetchData();
//   }, []);
//   return(
//     <div className=" h-full p-3">
//     <AdminClientComponent>
      
//       <div className="bg-gray-400 h-full rounded-2xl pt-2">
//       <Dashboard_header />
//         <div className='flex flex-row justify-center gap-6'>
//           <div className="mx-4 mt-4 flex flex-col gap-5">

//             <div className="w-[450px] h-[270px] bg-white rounded-lg flex flex-row items-center justify-center">
//               <div>
//                 <Image 
//                   src="/pwd.png"    
//                     alt="pwd"
//                     className="mr-2"
//                     height={150}
//                     width={150}
//                 />
//               </div>
//               <div className='text-center'>
//                 <p className='text-dash text-[40px] font-bold'>TOTAL PWD:</p> 
//                 <div className="text-[80px] font-bold text-dash">
//                 {totalPwds} 
//                 </div>
//               </div>
//             </div>

//             <AgeDistributionChart />
//           </div>

//           <div className="mx-4 mt-4 flex flex-col gap-5">
//             <DisabilityDistributionChart />

//             <div className="w-[450px] h-[270px] bg-white rounded-lg flex flex-col">
//               <p className='text-center text-dash text-[40px] font-bold mb-5 mt-5'>Status</p>
//               <div className='flex flex-row justify-around'>   
//                 <div className='flex flex-col'>
//                     <div className='flex flex-row items-center'>
//                       <p className='text-green-400 text-3xl font-bold w-[170px]' >Active:</p>
//                       <p className='text-green-400 text-3xl font-bold' >{statusDistribution.active}</p>
//                     </div>
//                     <div className='flex flex-row items-center'>
//                     <p className='text-red-400 text-3xl font-bold w-[170px]' >Inactive:</p>
//                       <p className='text-red-400 text-3xl font-bold' >{statusDistribution.inactive}</p>
//                     </div>
//                     <div className='flex flex-row items-center'>
//                       <p className='text-gray-400 text-3xl font-bold w-[170px]' >Deceased:</p>
//                       <p className='text-gray-400 text-3xl font-bold' >{statusDistribution.deceased}</p>
//                     </div>
//                   </div>
                  
//                   <div className='flex flex-col'>
//                     <div className='flex flex-row items-center gap-2'>
//                       <div className='w-4 h-4 bg-green-400 rounded-full' />
//                       <p className='text-green-400 text-sm' >Active</p>
//                     </div>
//                     <div className='flex flex-row items-center gap-2'>
//                       <div className='w-4 h-4 bg-red-400 rounded-full' />
//                       <p className='text-red-400 text-sm' >Inctive</p>
//                     </div>
//                     <div className='flex flex-row items-center gap-2'>
//                       <div className='w-4 h-4 bg-gray-400 rounded-full' />
//                       <p className='text-gray-400 text-sm' >Deceased</p>
//                     </div>
//                 </div>
//               </div>

//             </div>

//           </div>
          
//         </div>
//       </div>
     
//    </AdminClientComponent>
//   </div>
//   );
// };

// export default AdminPage;

"use client";

import { useState, useEffect } from "react";
import { Dashboard_header } from "@/components/header/header";
import AdminClientComponent from "../admin_validate";
import { getTotalPwd, getStatusDistribution } from "@/actions/todoAction";
import AgeDistributionChart from "@/components/analytics/ageChart";
import DisabilityDistributionChart from "@/components/analytics/disabilityChart";
import Image from "next/image";

const AdminPage = () => {
  const [totalPwds, setTotalPwds] = useState<number | null>(null);
  const [statusDistribution, setStatusDistribution] = useState<{
    active: number | null;
    inactive: number | null;
    deceased: number | null;
  }>({
    active: null,
    inactive: null,
    deceased: null,
  });

  // Fetch data on client-side
  useEffect(() => {
    const fetchData = async () => {
      try {
        const total = await getTotalPwd();
        setTotalPwds(total);

        const status = await getStatusDistribution();
        setStatusDistribution(status as { active: number | null; inactive: number | null; deceased: number | null });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full p-3">
      <AdminClientComponent>
        <div className="bg-gray-400 h-full rounded-2xl pt-2">
          <Dashboard_header />
          <div className="flex flex-row justify-center gap-6">
            {/* Total PWDs Section */}
            <div className="mx-4 mt-4 flex flex-col gap-5">
              <div className="w-[450px] h-[270px] bg-white rounded-lg flex flex-row items-center justify-center">
                <div>
                  <Image
                    src="/pwd.png"
                    alt="pwd"
                    className="mr-2"
                    height={150}
                    width={150}
                  />
                </div>
                <div className="text-center">
                  <p className="text-dash text-[40px] font-bold">TOTAL PWD:</p>
                  <div className="text-[80px] font-bold text-dash">
                    {totalPwds !== null ? totalPwds : "Loading..."}
                  </div>
                </div>
              </div>

              <AgeDistributionChart />
            </div>

            {/* Status Distribution Section */}
            <div className="mx-4 mt-4 flex flex-col gap-5">
              <DisabilityDistributionChart />

              <div className="w-[450px] h-[270px] bg-white rounded-lg flex flex-col">
                <p className="text-center text-dash text-[40px] font-bold mb-5 mt-5">
                  Status
                </p>
                <div className="flex flex-row justify-around">
                  <div className="flex flex-col">
                    {["active", "inactive", "deceased"].map((status) => (
                      <div key={status} className="flex flex-row items-center">
                        <p
                          className={`text-3xl font-bold w-[170px] ${
                            status === "active"
                              ? "text-green-400"
                              : status === "inactive"
                              ? "text-red-400"
                              : "text-gray-400"
                          }`}
                        >
                          {status.charAt(0).toUpperCase() + status.slice(1)}:
                        </p>
                        <p
                          className={`text-3xl font-bold ${
                            status === "active"
                              ? "text-green-400"
                              : status === "inactive"
                              ? "text-red-400"
                              : "text-gray-400"
                          }`}
                        >
                          {statusDistribution[status as keyof typeof statusDistribution] !==
                          null
                            ? statusDistribution[
                                status as keyof typeof statusDistribution
                              ]
                            : "Loading..."}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Status Legend */}
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-2">
                      <div className="w-4 h-4 bg-green-400 rounded-full" />
                      <p className="text-green-400 text-sm">Active</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <div className="w-4 h-4 bg-red-400 rounded-full" />
                      <p className="text-red-400 text-sm">Inactive</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <div className="w-4 h-4 bg-gray-400 rounded-full" />
                      <p className="text-gray-400 text-sm">Deceased</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminClientComponent>
    </div>
  );
};

export default AdminPage;
