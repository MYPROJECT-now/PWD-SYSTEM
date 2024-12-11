"use client";

import { useAddModal } from "@/store/use-add-modal";
import { addTodo } from "@/actions/todoAction";
import { AddTodo } from "./addTodo";
import { Button } from "./ui/button";


export const Add_page = () => {
  const { open } = useAddModal();



  const createTodo = (pwdNo: string, surname: string, name: string, middleName: string, Purok: string, age: number, 
    dateOfBirth: string, gender: string, issueDate: string, expiryDate: string, typeOfDisability: string, status: string) => {
    console.log("Creating todo item with pwdNo:", pwdNo, "surname:", surname, "name:", name);
    addTodo(pwdNo, surname, name, middleName, Purok, age, dateOfBirth, gender, issueDate, expiryDate, typeOfDisability, status)
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
      <Button
      variant="add"
      size="sm"
        onClick={open}
      >
        ADD PWD MEMBER
      </Button>
      <AddTodo createTodo={createTodo} />
    </div>
  );
};


