"use client";
import { Button } from "../ui/button";
import { ResetModal } from "./resetTodo";
import { useResetModal } from "@/store/use-reset-modal";

export const ResetPage = () => {
    const { open } = useResetModal();
    return (
        <div>
              <Button
      variant="add"
      size="lg"
        onClick={open}
      >
        RESET USERS PASSWORD
      </Button>
      <ResetModal />
    </div>
            
    ) ;
};