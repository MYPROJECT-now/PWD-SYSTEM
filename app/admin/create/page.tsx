'use client';

import { useState } from 'react';

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
        setMessage(`User created successfully. Check ${email} for the username and the temporary password.`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage(`An unexpected ${error} occurred.`);
    }
  };

  return (
    <div className="h-full p-3 w-full">
      <div className='flex flex-col w-full h-full items-center justify-center bg-gray-300 rounded-2xl pt-2'>
          <div className='w-[300px] h-[180px] flex flex-col items-center bg-gray-500 rounded-lg p-5'>
          <h1>Create PWD User</h1>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-row gap-2 mb-1'>
              <div className='w-[70px] '>
              <label htmlFor="pwdNo">PWD No:</label>
              </div>
              <input
                type="text"
                placeholder=' 012345'
                id="pwdNo"
                value={pwdNo}
                onChange={(e) => setPwdNo(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-row gap-2'>
              <div className='w-[70px] '>
              <label htmlFor="email">Email:</label>
              </div>
              <input
                type="email"
                placeholder=' cW9Ig@example.com'
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='text-center mt-2'>
            <button className='bg-white w-[100px] h-[30px] rounded-lg' type="submit">Create User</button>
            </div>
          </form>
          {message && <p>{message}</p>}
          </div>
      </div>
    </div>
  );
}
