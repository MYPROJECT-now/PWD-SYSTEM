"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { useState } from "react";
import { useResetModal } from "@/store/use-reset-modal";
import { Button } from "../ui/button";

  
  export const ResetModal = () => {
    const { isOpen, close } = useResetModal();

    const [pwdNo, setPwdNo] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handlePasswordReset = async () => {
        setIsButtonDisabled(true); // Disable the button when clicked
        try {
            const response = await fetch('/api/reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pwdNo }),
            });
    
            const data = await response.json();
    
           
            if (response.ok) {
                alert('The password has been changed and sent to the users email.');
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch  {
            alert(`An unexpected error occurred`);
        } finally {
            setIsButtonDisabled(false); // Re-enable the button after processing

            //clear the input field

            setPwdNo('');
        }
    };
    return (
        <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reset User&apos;s Password</DialogTitle>
            <DialogDescription>
           <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter PWD No."
              value={pwdNo}
              onChange={(e) => setPwdNo(e.target.value)}
              className="mt-4 p-2 border rounded text-black"
            />
            <Button
              onClick={handlePasswordReset}
              variant="signin"
              size="lg"
              className="mt-5 text-black"
              disabled={isButtonDisabled} // Disable button when state is true
            >
              Reset Password
            </Button>
            </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  };

