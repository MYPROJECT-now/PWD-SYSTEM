import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useResetModal } from "@/store/use-reset-modal";
import { Button } from "../ui/button";

export const ResetSignInModal = () => {
  const { isOpen, close } = useResetModal();

  const [username, setUsername] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handlePasswordReset = async () => {
      setIsButtonDisabled(true);
      try {
          const response = await fetch('/api/resetSignIn', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username }),
          });

          const data = await response.json();

          if (response.ok) {
              alert('Your password has been reset and has been sent to your email.');
          } else {
              alert(`Error: ${data.error}`);
          }
      } catch {
          alert(`An unexpected error occurred`);
      } finally {
          setIsButtonDisabled(false);
          setUsername(''); // Clear the input field
      }
  };

  return (
      <Dialog open={isOpen} onOpenChange={close}>
          <DialogContent className="w-[500px] h-[280px] flex flex-col rounded-t-lg">
              <DialogHeader>
                  <DialogTitle className=" text-center text-white text-xl pt-3 bg-green-700 w-[502px] h-[50px] -mt-[26px] -ml-[26px] rounded-t-lg">
                      Reset Password
                  </DialogTitle>
                  <DialogDescription>
                      <div className="flex flex-col justify-center items-center h-[200px] gap-4">
                          <div className="flex flex-col">
                              <label className="text-sm" htmlFor="username">Username</label>
                              <input
                                  type="text"
                                  placeholder="Enter username"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  className="p-2 w-[400px] border-2 rounded text-black"
                              />
                          </div>
                          <Button
                              onClick={handlePasswordReset}
                              variant="add"
                              size="lg"
                              className="mt-5 text-white"
                              disabled={isButtonDisabled}
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
