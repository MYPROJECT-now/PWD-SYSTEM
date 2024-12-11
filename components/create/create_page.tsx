"use client";
import { useCreateModal } from "@/store/use-create-modal";
import { Button } from "../ui/button";
import { CreateModal } from "./createTodo";

export const CreatePage = () => {
    const { open } = useCreateModal();
    return (
        <div>
              <Button
      variant="add"
      size="lg"
        onClick={open}
      >
        ADD CREATE USER
      </Button>
      <CreateModal />
    </div>
            
    ) ;
};