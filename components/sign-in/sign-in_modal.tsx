"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { useSignInModal } from "@/store/use-signIn-modal";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

 
export const SignInModal = () => {
    const { isLoaded, signIn, setActive } = useSignIn();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    const { isOpen, close } = useSignInModal(); 
  
    // Handle user submitting username and password
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!isLoaded) return;
  
      try {
        // Start the sign-in process using the username and password provided
        const signInAttempt = await signIn.create({
          identifier: username,
          password,
        });
  
        // If sign-in is successful, set the session to active and redirect the user
        if (signInAttempt.status === 'complete') {
          await setActive({ session: signInAttempt.createdSessionId });
          router.push('/');
        } else {
          console.log(signInAttempt);
        }
      } catch (err) {
        console.error('Error:', JSON.stringify(err, null, 2));
      }
    };

    return ( 
        <Dialog open={isOpen} onOpenChange={close}>
          <DialogContent className="w-[500px] min-h-[400px] text-center p-10 bg-gray-300 rounded-lg shadow-lg">
            <DialogHeader>
              <DialogTitle>
                <p className="w-full text-center text-xl font-bold mb-4 ">Sign In to PWD MANAGEMENT SYSTEM</p>
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col justify-center items-center">
                <div className="mb-4 flex flex-row items-center gap-3">
                  <label className="text-lg mb-2 w-[100px]" htmlFor="username">Username</label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4 flex flex-row items-center gap-3">
                  <label className="text-lg mb-2 w-[100px]" htmlFor="password">Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button type="submit" className="w-[350px] mt-5 p-3 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Sign In</button>
                <div className="mt-4 text-center">
                  <a href="/forget-password" className="text-blue-500 hover:text-blue-700">Forgot Password?</a>
                </div>
              </form>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      );
}