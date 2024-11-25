"use client"
import { useState, useEffect } from 'react';
import { Dashboard_header } from "@/components/header";
import AdminClientComponent from "../admin_validate";
import { getTotalPwd, getStatusDistribution  } from "@/actions/todoAction";
import AgeDistributionChart from '@/components/analytics/ageChart';
import DisabilityDistributionChart from '@/components/analytics/disabilityChart';
import Image from 'next/image';

const AdminPage = async () => {

  const [totalPwds, setTotalPwds] = useState(0);
  const [statusDistribution, setStatusDistribution] = useState({
    active: 0,
    inactive: 0,
    deceased: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const totalPwds = await getTotalPwd();
      setTotalPwds(totalPwds);

      const statusDistribution = await getStatusDistribution() as { active: number; inactive: number; deceased: number };
      setStatusDistribution(statusDistribution);
    };
    fetchData();
  }, []);
  return(
    <div className=" h-full p-3">
    <AdminClientComponent>
      
      <div className="bg-gray-400 h-full rounded-2xl pt-2">
      <Dashboard_header />
        <div className='flex flex-row justify-center gap-6'>
          <div className="mx-4 mt-4 flex flex-col gap-5">

            <div className="w-[500px] h-[270px] bg-white rounded-lg flex flex-row items-center justify-center">
              <div>
                <Image 
                  src="/pwd.png"    
                    alt="pwd"
                    className="mr-2"
                    height={150}
                    width={150}
                />
              </div>
              <div className='text-center'>
                <p className='text-dash text-[40px] font-bold'>TOTAL PWD:</p> 
                <div className="text-[80px] font-bold text-dash">
                {totalPwds} 
                </div>
              </div>
            </div>

            <AgeDistributionChart />
          </div>

          <div className="mx-4 mt-4 flex flex-col gap-5">
            <DisabilityDistributionChart />

            <div className="w-[500px] h-[220px] bg-white rounded-lg flex flex-col">
              <p className='text-center text-dash text-[40px] font-bold mb-5'>Status</p>
              <div className='flex flex-row justify-around'>   
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center gap-2'>
                      <p className='text-green-400 text-3xl font-bold' >Active:</p>
                      <p className='text-green-400 ml-[36px] text-3xl font-bold' >{statusDistribution.active}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                    <p className='text-red-400 text-3xl font-bold' >Inactive:</p>
                      <p className='text-red-400 ml-4 text-3xl font-bold' >{statusDistribution.inactive}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <p className='text-gray-400 text-2xl font-bold' >Deceased:</p>
                      <p className='text-gray-400 ml-5 text-3xl font-bold' >{statusDistribution.deceased}</p>
                    </div>
                  </div>
                  
                  <div className='flex flex-col'>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='w-4 h-4 bg-green-400 rounded-full' />
                      <p className='text-green-400 text-sm' >Active</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='w-4 h-4 bg-red-400 rounded-full' />
                      <p className='text-red-400 text-sm' >Inctive</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='w-4 h-4 bg-gray-400 rounded-full' />
                      <p className='text-gray-400 text-sm' >Deceased</p>
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