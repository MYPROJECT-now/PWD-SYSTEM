"use client";
import { Button } from "../ui/button";
import { ResetSignInModal } from "./resetTodo";
import { useResetModal } from "@/store/use-reset-modal";

export const ResetSignInPage = () => {
    const { open } = useResetModal();
    return (
        <div>
              <Button
      variant="forget"
      size="sm"
        onClick={open}
        className="text-sm"
      >
        forgot password
      </Button>
      <ResetSignInModal />
    </div>
            
    ) ;
};