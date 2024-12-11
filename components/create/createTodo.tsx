"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { useState } from "react";
import { Button } from "../ui/button";
import { useCreateModal } from "@/store/use-create-modal";

  
  export const CreateModal = () => {
    const { isOpen, close } = useCreateModal();

    const [pwdNo, setPwdNo] = useState
    ('');
    const [email, setEmail] = useState('');
    const [message] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // State to manage button state
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      // Disable button
      setIsSubmitting(true);
    
      try {
        const response = await fetch('/api/create-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pwdNo, email }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
          alert('User created successfully. Check the email for the username and the temporary password.');
        } else {
          alert(`Error: ${data.error}`);
        }
      } catch {
        alert(`An unexpected error occurred`);
      } finally {
        // Enable button after the process is complete
        setIsSubmitting(false);
  
      // Clear the form fields
      setPwdNo('');
      setEmail('');
      }
    };
    return (
        <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className="w-[500px] h-[350px] flex flex-col rounded-t-lg">
          <DialogHeader>
            <DialogTitle className=" text-center text-white text-xl pt-3 bg-green-700 w-[502px] h-[50px] -mt-[26px] -ml-[26px] rounded-t-lg">
              Create User</DialogTitle>
            <DialogDescription>
            <form onSubmit={handleSubmit}>
                  <div className="flex flex-col justify-center h-[280px] gap-10">
                    <div className="flex flex-col items-center gap-2">

                      <div className="flex flex-row gap-2 mb-1">
                        <div className="w-[150px] h-[50px] text-xl text-semibold flex items-center">
                          <label htmlFor="pwdNo">PWD Number</label>
                        </div>
                        <input
                          type="text"
                          placeholder=" 012345"
                          id="pwdNo"
                          value={pwdNo}
                          onChange={(e) => setPwdNo(e.target.value)}
                          required
                          className="h-[50px] w-[250px] border rounded-sm text-black pl-3"
                        />
                      </div>

                      <div className="flex flex-row gap-2">
                        <div className="w-[150px] h-[50px] text-xl text-semibold flex items-center">
                          <label htmlFor="email">Email</label>
                        </div>
                        <input
                          type="email"
                          placeholder=" pwd@example.com"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-[50px] w-[250px] border rounded-sm text-black pl-3"
                        />
                      </div>
                    </div>

                    <div className="text-center mt-2">
                      <Button
                        variant="add"
                        size="lg"
                        type="submit"
                        disabled={isSubmitting} // Disable button when submitting
                      >
                        {isSubmitting ? 'Submitting...' : 'Create User'}
                      </Button>
                    </div>
                    {message && <p>{message}</p>}
                  </div>
                </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  };

