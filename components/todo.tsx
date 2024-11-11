"use client";
import { pwdType } from "@/types/todoTypes";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  todo: pwdType;
  changeTodoText: (id: number, pwdNo: string, surname: string, name: string, middleName: string, 
    Purok: string, age: number, issueDate: string, expiryDate: string, typeOfDisability: string, ) => void;
  // toggleIsTodoDone: (id: number, done: boolean) => void;
  deleteTodoItem: (id: number) => void;
}

const Todo: FC<Props> = ({
  todo,
  changeTodoText,
  // toggleIsTodoDone,
  deleteTodoItem,
}) => {
  // State for handling editing mode
  const [editing, setEditing] = useState(false);

  // State for handling text input
  const [pwdNo, setpwdNo] = useState(todo.pwdNo);
  const [surname, setSurname] = useState(todo.surname);
  const [name, setName] = useState(todo.name);
  const [middlename, setMiddlename] = useState(todo.middleName);
  const [purok, setPurok] = useState(todo.Purok);
  const [age, setAge] = useState(todo.age);
  const [issueDate, setIssueDate] = useState(todo.issueDate);
  const [expiryDate, setExpiryDate] = useState(todo.expiryDate);
  const [typeOfDisability, setTypeOfDisability] = useState(todo.typeOfDisability);



  const handlePwdNoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setpwdNo(e.target.value);
  };

  const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleMiddlenameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMiddlename(e.target.value);
  };

  const handlePurokChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPurok(e.target.value);
  };
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };

  const handleIssueDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIssueDate(e.target.value);
  };

  const handleExpiryDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(e.target.value);
  };

  const handleTypeOfDisabilityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTypeOfDisability(e.target.value);
  };


  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Event handler for saving the edited text
  const handleSave = async () => {
    changeTodoText(todo.id, pwdNo, surname, name, middlename, purok, age, issueDate, expiryDate, typeOfDisability);
    setEditing(false);
  };

  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false);
    setpwdNo(todo.pwdNo);
    setSurname(todo.surname);
    setName(todo.name);
    setMiddlename(todo.middleName); 
    setPurok(todo.Purok);
    setAge(todo.age);
    setIssueDate(todo.issueDate);
    setExpiryDate(todo.expiryDate);
    setTypeOfDisability(todo.typeOfDisability);
  };

  // Event handler for deleting a todo item
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodoItem(todo.id);
    }
  };


return (
  <>
    <td className="border border-black w-0">
      <input
        type="text"
        value={pwdNo}
        onChange={handlePwdNoChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>
    <td className="border border-black w-0">
      <input
        type="text"
        value={surname}
        onChange={handleSurnameChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>
    <td className="border border-black w-0">
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>
    <td className="border border-black w-0">
      <input
        type="text"
        value={middlename}
        onChange={handleMiddlenameChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>
    <td className="border border-black w-0">
      <input
        type="text"
        value={purok}
        onChange={handlePurokChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>
    <td className="border border-black w-0">
      <input
        type="text"
        value={age}
        onChange={handleAgeChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>

    <td className="border border-black w-0">
      <input
        type="text"
        value={issueDate}
        onChange={handleIssueDateChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>

    <td className="border border-black w-0">
      <input
        type="text"
        value={expiryDate}
        onChange={handleExpiryDateChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>

    <td className="border border-black w-0">
      <input
        type="text"
        value={typeOfDisability}
        onChange={handleTypeOfDisabilityChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>

    <td className="border border-black">
      <div className="flex items-center justify-center">
        {editing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-green-50 rounded px-2 w-14 py-1"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-400 text-blue-50 rounded w-14 px-2 py-1"
          >
            Edit
          </button>
        )}
        {editing ? (
          <button
            onClick={handleCancel}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Close
          </button>
        ) : (
          <button
            onClick={handleDelete}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Delete
          </button>
        )}
        </div>
    </td>
  </>
);
};


export default Todo;
