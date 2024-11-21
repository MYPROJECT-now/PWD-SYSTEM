// 'use client';

// import { useState } from 'react';

// export default function CreateUserForm() {
//   const [pwdNo, setPwdNo] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/create-user', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ pwdNo, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(`User created successfully.`);
//       } else {
//         setMessage(`Error: ${data.error}`);
//       }
//     } catch (error) {
//       setMessage('An unexpected error occurred.');
//     }
//   };

//   return (
//     <div>
//       <h1>Create PWD User</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="pwdNo">PWD No:</label>
//           <input
//             type="text"
//             id="pwdNo"
//             value={pwdNo}
//             onChange={(e) => setPwdNo(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Create User</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }



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
    <div>
      <h1>Create PWD User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pwdNo">PWD No:</label>
          <input
            type="text"
            placeholder='012345'
            id="pwdNo"
            value={pwdNo}
            onChange={(e) => setPwdNo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder='cW9Ig@example.com'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
