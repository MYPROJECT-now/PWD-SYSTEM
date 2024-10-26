"use client";
import { ChangeEvent, FC, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAddModal } from "@/store/use-add-modal";

interface Props {
  createTodo: (pwdNo: string, surname: string, name: string) => void;
}


 export const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [pwdNo, setPwdNo] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");

  const { isOpen, close } = useAddModal();

  // Event handler for input change
  const handlePwdNoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPwdNo(e.target.value);
  };
  
  const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };
  
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    createTodo(pwdNo, surname, name);
    setPwdNo("");
    setSurname("");
    setName("");
  };

  // Rendering the AddTodo component
  return (
    <Dialog open={isOpen} onOpenChange={close}>
    <DialogContent className="w-[800px]">
        <DialogHeader>
            <DialogTitle className="text-center font-bold  text-3xl">
                ADD PWD MEMBER
            </DialogTitle>
            <DialogDescription className="text-center f text-xl">
            <div className="w-full flex flex-col gap-1 mt-2">
              <div className="flex flex-row gap-1">
                {/* Input field for entering new todo text */}
                <div className="w-[120px] text-black  text-start ">
                  <label htmlFor="pwdNo">PwdNo:</label>
                </div>
                <div className="w-[350px] text-black">
                  <input
                    placeholder="Abc123"
                    type="text"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handlePwdNoChange}
                    value={pwdNo}
                  />
                </div>
              </div>

              <div className="flex flex-row gap-1">
              <div className="w-[120px] text-black text-start  ">
                <label htmlFor="Surname">Surname:</label>
                </div>
              <div className="w-[350px] text-black">
                <input
                  placeholder="Angela"
                  type="text"
                  className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                  onChange={handleSurnameChange}
                  value={surname}
                />
              </div>

              </div>

              <div className="flex flex-row gap-1">
                <div className="w-[120px] text-black text-start  ">
                  <label htmlFor="Name">Name:</label>
                </div>

                <div className="w-[350px] text-black">
                  <input
                    type="text"
                    placeholder="Recierdo"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleNameChange}
                    value={name}
                  />
                </div>
              </div>

                {/* Button for adding a new todo */}
              <div className="flex justify-center mt-4">
                <button
                  className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-14 py-1"
                  onClick={handleAdd}
                >
                  Add
                </button>
              </div>



              </div>
            </DialogDescription>
        </DialogHeader>
    </DialogContent>
</Dialog>
   
  );
};

