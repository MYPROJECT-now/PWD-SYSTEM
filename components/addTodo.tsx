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

import moment from 'moment';
import { Button } from "./ui/button";

interface Props {
  createTodo: (pwdNo: string, surname: string, name: string, middleName: string, Purok: string, 
    age: number, contactNo: string, issueDate: string, expiryDate: string, typeOfDisability: string, status: string) => void;
}


 export const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [pwdNo, setPwdNo] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [Purok, setPurok] = useState("");
  const [age, setAge] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [typeOfDisability, setTypeOfDisability] = useState("");
  const [status, setStatus] = useState("Active");

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
 
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleContactNoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContactNo(e.target.value);
  };

  const handleIssueDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIssueDate(e.target.value);
  };

  const handleExpiryDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(e.target.value);
  };

  const handleTypeOfDisabilityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTypeOfDisability(e.target.value);
  };


  // Event handler for adding a new todo
  const handleAdd = async () => {
    if (!pwdNo || !surname || !name || !Purok || !age || !issueDate || !expiryDate || !typeOfDisability) {
      alert("Please fill in all fields");
      return;
    }

    if (!moment(issueDate, 'YYYY-MM-DD', true).isValid() || !moment(expiryDate, 'YYYY-MM-DD', true).isValid()) {
      alert('Invalid date format. Please use YYYY-MM-DD.');
      return;
    }
    if (moment(expiryDate).isBefore(moment(issueDate))) {
      alert('Expiry date cannot be before issue date.');
      return;
    }

    if (age && (Number(age) < 1 || Number(age) > 59)) {
      alert("Invalid age. Please enter a valid age.");
      return;
    }

    if (contactNo && (contactNo.length !== 11 || contactNo.startsWith('09') !== true)) {
      alert('Invalid contact number. Please enter a valid contact number.');
      return;
    }
    createTodo(pwdNo, surname, name, middleName, Purok, Number(age), contactNo, issueDate, expiryDate, typeOfDisability, status);
    setPwdNo("");
    setSurname("");
    setName("");
    setMiddleName("");
    setPurok("");
    setAge("");
    setContactNo("");
    setIssueDate("");
    setExpiryDate("");
    setTypeOfDisability("");
    setStatus("Active");
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
                <div className="w-[120px] text-black text-start  ">
                  <label htmlFor="IssueDate">IssuanceDate:</label>
                </div>

                <div className="w-[320px] text-black">
                  <input
                    type="text"
                    placeholder="YYYY-MM-DD"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleIssueDateChange}
                    value={issueDate}
                  />
                </div>
              </div>
              
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
                  <label htmlFor="Address">Address:</label>
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
                  <label htmlFor="Age">Age:</label>
                </div>

                <div className="w-[320px] text-black">
                  <input
                    type="text"
                    placeholder="20"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleAgeChange}
                    value={age}
                  />
                </div>
              </div>

              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start  ">
                  <label htmlFor="ContactNo">ContactNo:</label>
                </div>

                <div className="w-[320px] text-black">
                  <input
                    type="text"
                    placeholder="09123456789"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleContactNoChange}
                    value={contactNo}
                  />
                </div>
              </div>

             

              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start  ">
                  <label htmlFor="ExpiryDate">ExpiryDate:</label>
                </div>

                <div className="w-[320px] text-black">
                  <input
                    type="text"
                    placeholder="YYYY-MM-DD"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleExpiryDateChange}
                    value={expiryDate}
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
                    <option value="Deaf/Hard of Hearing">Deaf/Hard of Hearing </option>
                    <option value="Intelectual Disability">Intelectual Disability</option>
                    <option value="Learning Disability">Learning Disability</option>
                    <option value="Mental Disability">Mental Disability</option>
                    <option value="Orthopedic Disability">Orthopedic Disability</option>
                    <option value="Physical Disability">Physical Disability</option>
                    <option value="Psychological Disability">Psychological Disability</option>
                    <option value="Speech and Language Impairment">Speech and Language Impairment</option>
                    <option value="Visual Disability">Visual Disability</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>


                {/* Button for adding a new todo */}
              <div className="flex justify-center mt-4">
                <Button
                  variant="add"
                  size="lg"
                  onClick={handleAdd}
                >
                  Add
                </Button>
              </div>
              </div>
            </DialogDescription>
        </DialogHeader>
    </DialogContent>
</Dialog>
   
  );
};

