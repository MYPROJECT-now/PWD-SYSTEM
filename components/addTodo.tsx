"use client";
import { ChangeEvent, FC, useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAddModal } from "@/store/use-add-modal";

interface Props {
  createTodo: (pwdNo: string, surname: string, name: string, middleName: string, Purok: string, 
    sex: string, typeOfDisability: string) => void;
}


 export const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [pwdNo, setPwdNo] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [Purok, setPurok] = useState("");
  const [sex, setSex] = useState("");
  const [typeOfDisability, setTypeOfDisability] = useState("");

  const { isOpen, close } = useAddModal();



  const handleClose = () => {
    close();
    window.location.reload();
    };

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

  const handleMiddleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMiddleName(e.target.value);
  };

  const handlePurokChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPurok(e.target.value);
  };
 
  const handleSexChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSex(e.target.value);
  };
  const handleTypeOfDisabilityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTypeOfDisability(e.target.value);
  };


  // Event handler for adding a new todo
  const handleAdd = async () => {
    if (!pwdNo || !surname || !name || !Purok || !sex || !typeOfDisability) {
      alert("Please fill in all fields");
      return;
    }
    createTodo(pwdNo, surname, name, middleName, Purok, sex, typeOfDisability);
    setPwdNo("");
    setSurname("");
    setName("");
    setMiddleName("");
    setPurok("");
    setSex("");
    setTypeOfDisability("");
  };

  // Rendering the AddTodo component
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
    <DialogContent className="w-[800px]">
        <DialogHeader>
            <DialogTitle className="text-center font-bold  text-3xl">
                ADD PWD MEMBER
            </DialogTitle>
            <DialogDescription className="text-center text-xl">
            <div className="w-full flex flex-col gap-0 mt-2">
              <div className="flex flex-row gap-9">
                {/* Input field for entering new todo text */}
                <div className="w-[120px] text-black  text-start ">
                  <label htmlFor="pwdNo">PwdNo:</label>
                </div>
                <div className="w-[320px] text-black">
                  <input
                    placeholder="Abc123"
                    type="text"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handlePwdNoChange}
                    value={pwdNo}
                  />
                </div>
              </div>

              <div className="flex flex-row gap-9">
              <div className="w-[120px] text-black text-start  ">
                <label htmlFor="Surname">Surname:</label>
                </div>
              <div className="w-[320px] text-black">
                <input
                  placeholder="Recierdo"
                  type="text"
                  className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                  onChange={handleSurnameChange}
                  value={surname}
                />
              </div>

              </div>

              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start  ">
                  <label htmlFor="Name">Name:</label>
                </div>

                <div className="w-[320px] text-black">
                  <input
                    type="text"
                    placeholder="Angela"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleNameChange}
                    value={name}
                  />
                </div>
              </div>

              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start  ">
                  <label htmlFor="MiddleName">MiddleName:</label>
                </div>

                <div className="w-[320px] text-black">
                  <input
                    type="text"
                    placeholder="Mae"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleMiddleNameChange}
                    value={middleName}
                  />
                </div>
              </div>

              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start  ">
                  <label htmlFor="Purok">Purok:</label>
                </div>
                <div className="w-[320px] text-black">
                  <select
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handlePurokChange}
                    value={Purok}
                   >
                    <option className="text-gray-300" value="">Select Purok</option>
                    <option value="Purok 1">Purok 1</option>
                    <option value="Purok 2">Purok 2</option>
                    <option value="Purok 3">Purok 3</option>
                    <option value="Purok 4">Purok 4</option>
                    <option value="Purok 5">Purok 5</option>
                    <option value="Purok 6">Purok 6</option>
                    <option value="Purok 7">Purok 7</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>

              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start  ">
                  <label htmlFor="Sex">Sex:</label>
                </div>

                <div className="w-[320px] text-black">
                  <input
                    type="text"
                    placeholder="Female"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleSexChange}
                    value={sex}
                  />
                </div>
              </div>

              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start  ">
                  <label htmlFor="TypeOfDisability">TypeOfDisability:</label>
                </div>

                <div className="w-[320px] text-black">
                <select
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleTypeOfDisabilityChange}
                    value={typeOfDisability}
                   >
                    <option className="text-gray-300" value="">Disability</option>
                    <option value="Intellectual">Intellectual </option>
                    <option value="Learning">Lerning</option>
                    <option value="Mental">Mental</option>
                    <option value="Physical">Physical</option>
                    <option value="Psychological">Psychological</option>
                    <option value="Speech">Speech</option>
                    <option value="Visual">Visual</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Rare Disease">Rare Disease</option>
                    {/* Add more options as needed */}
                  </select>
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

