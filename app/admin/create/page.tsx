'use client';

import { useState } from 'react';
import AdminClientComponent from '../admin_validate';
import { Dashboard_header } from '@/components/header';
import { Button } from '@/components/ui/button';

export default function CreateUserForm() {
  const [pwdNo, setPwdNo] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/create-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pwdNo, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`User created successfully. Check the email for the username and the temporary password.`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage(`An unexpected ${error} occurred.`);
    }
  };

  return (
    <div className="h-full p-3 w-full">
       <AdminClientComponent>
      <div className='flex flex-col w-full h-full  bg-gray-300 rounded-2xl pt-2'>
      <Dashboard_header />
      <div className="mt-4 mx-16 h-[520px]">
              <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
              Create PWD User
              </div>
      <div className='flex flex-col w-full h-full items-center justify-center bg-white rounded-2xl pt-2'>

          <div className='w-[500px] h-[300px] flex flex-col items-center gap-[30px] bg-gray-500 text-white rounded-lg p-5'>
          <p className='text-3xl font-bold'>Create PWD User</p>
            <form onSubmit={handleSubmit}>
            <div className='flex flex-col justify-between h-[200px]'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row gap-2 mb-1'>         
                <div className='w-[100px] h-[50px] text-2xl text-semibold flex  items-center'>
                <label htmlFor="pwdNo">PWD No</label>
                </div>
                <input
                  type="text"
                  placeholder=' 012345'
                  id="pwdNo"
                  value={pwdNo}
                  onChange={(e) => setPwdNo(e.target.value)}
                  required
                  className='h-[50px] rounded-sm text-black pl-3'
                />
              </div>

              <div className='flex flex-row gap-2'>
                <div className='w-[100px] h-[50px] text-2xl text-semibold flex  items-center'>
                <label htmlFor="email">Email</label>
                </div>
                <input
                  type="email"
                  placeholder=' cW9Ig@example.com'
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='h-[50px] rounded-sm text-black pl-3'
                />
              </div>
            </div>      

              <div className='text-center mt-2'>
              <Button
              variant='add'
              size='lg'
              type='submit'
              >
                Create User
              </Button>
              </div>
              {message && <p>{message}</p>}
            </div>
            </form>
 
          </div>


          </div>
          </div>
      </div>
      </AdminClientComponent>
    </div>
  );
}
