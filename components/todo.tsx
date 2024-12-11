"use client";
import { pwdType } from "@/types/todoTypes";
import { ChangeEvent, FC, useState } from "react";
import { Button } from "./ui/button";

interface Props {
  todo: pwdType;
  changeTodoText: (id: number, pwdNo: string, surname: string, name: string, middleName: string, 
    Purok: string, age: number, dateOfBirth: string, gender: string, issueDate: string, expiryDate: string, typeOfDisability: string, status: string ) => void;
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
  const [dateOfBirth, setDateOfBirth] = useState(todo.dateOfBirth); 
  const [gender, setGender] = useState(todo.gender);
  const [issueDate, setIssueDate] = useState(todo.issueDate);
  const [expiryDate, setExpiryDate] = useState(todo.expiryDate);
  const [typeOfDisability, setTypeOfDisability] = useState(todo.typeOfDisability);
  const [status, setStatus] = useState(todo.status);



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

  const handleDateOfBirthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(e.target.value);
  };

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
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

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Event handler for saving the edited text
  const handleSave = async () => {
    changeTodoText(todo.id, pwdNo, surname, name, middlename, purok, age, dateOfBirth, gender, issueDate, expiryDate, typeOfDisability, status);
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
    setDateOfBirth(todo.dateOfBirth);
    setGender(todo.gender);
    setAge(todo.age);
    setIssueDate(todo.issueDate);
    setExpiryDate(todo.expiryDate);
    setTypeOfDisability(todo.typeOfDisability);
    setStatus(todo.status);
  };

  // Event handler for deleting a todo item
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this data?")) {
      deleteTodoItem(todo.id);
    }
  };

  //status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Inactive':
        return 'bg-red-500';
      case 'Deceased':
        return 'bg-gray-500';
      default:
        return '';
    }
  };

  const getFullName = () => {
    const middleInitial = middlename ? middlename[0].toUpperCase() + "." : "";
    return `${surname}, ${name} ${middleInitial}`;
  };


return (
  <>
     <td className="border border-black w-auto">
      <input
        type="text"
        value={issueDate}
        onChange={handleIssueDateChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>

    <td className="border border-black w-auto">
      <input
        type="text"
        value={expiryDate}
        onChange={handleExpiryDateChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>

    <td className="border border-black w-auto">
      <input
        type="text"
        value={pwdNo}
        onChange={handlePwdNoChange}
        readOnly={!editing}
        className="w-full text-center "
      />
    </td>

    <td className="border border-black w-auto">
  {editing ? (
    <div className="flex flex-row gap-1">
      <input
        type="text"
        value={surname}
        onChange={handleSurnameChange}
        placeholder="Surname"
        className="w-full text-center"
      />
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
        className="w-full text-center"
      />
      <input
        type="text"
        value={middlename}
        onChange={handleMiddlenameChange}
        placeholder="Middle Name"
        className="w-full text-center"
      />
    </div>
  ) : (
    <span className="text-start pl-1">{getFullName()}</span>
  )}
</td>

      
    <td className="border border-black w-auto">
      <input
        type="text"
        value={purok}
        onChange={handlePurokChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>
    <td className="border border-black w-auto">
      <input
        type="text"
        value={age}
        onChange={handleAgeChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>

    <td className="border border-black w-auto">
      <input
        type="text"
        value={dateOfBirth}
        onChange={handleDateOfBirthChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>

    <td className="border border-black w-auto">
      <input
        type="text"
        value={gender}
        onChange={handleGenderChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>

    <td className="border border-black w-auto">
      <input
        type="text"
        value={typeOfDisability}
        onChange={handleTypeOfDisabilityChange}
        readOnly={!editing}
        className="w-full text-center"
      />
    </td>

    <td className="border border-black w-auto">
      <input
        type="text"
        value={status}
        onChange={handleStatusChange}
        readOnly={!editing}
        className={`w-full text-center py-1 ${getStatusColor(status)}`}
      />
    </td>

    <td className="border border-black">
      <div className="flex items-center justify-center gap-1">
        {editing ? (
          <Button
            variant="add"
            size="sm"
            onClick={handleSave}
           
          >
            Save
          </Button>
        ) : (
          <Button
          variant="signin"
            size="sm"
            onClick={handleEdit}
            className="px-4"
          >
            Edit
          </Button>
        )}
        {editing ? (
          <Button
          variant="destructive"
          size="sm"
            onClick={handleCancel}
          >
            Close
          </Button>
        ) : (
          <Button
           variant="destructive"
            size="sm"
            onClick={handleDelete}
           
          >
            Delete
          </Button>
        )}
        </div>
    </td>
  </>
);
};


export default Todo;
