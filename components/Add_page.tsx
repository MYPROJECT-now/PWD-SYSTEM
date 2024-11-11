"use client";

import { useAddModal } from "@/store/use-add-modal";
import { addTodo } from "@/actions/todoAction";
import { AddTodo } from "./addTodo";


export const Add_page = () => {
  const { open } = useAddModal();



  const createTodo = (pwdNo: string, surname: string, name: string, middleName: string, Purok: string, age: number, 
    contactNo: string, issueDate: string, expiryDate: string, typeOfDisability: string) => {
    console.log("Creating todo item with pwdNo:", pwdNo, "surname:", surname, "name:", name);
    addTodo(pwdNo, surname, name, middleName, Purok, age, contactNo, issueDate, expiryDate, typeOfDisability)
      .then((response) => {
        console.log("Response from server:", response);
        if (response.success) {
          alert("You have successfully added a new data");

        }
      })
      .catch((error) => {
        console.error("Error creating todo item:", error);
        if (error) {
          alert("The data already exists. Please try again.");
        } else {
          alert("An error occurred while adding the todo item.");
        }
      });
  };



  return (
    <div>
      <button
        className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-[250px] py-1 mt-4"
        onClick={open}
      >
        ADD PWD MEMBER
      </button>
      <AddTodo createTodo={createTodo} />
    </div>
  );
};


