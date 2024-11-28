"use client";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  createNotif: (title: string, message: string) => void;
}

const AddNotif: FC<Props> = ({ createNotif }) => {
  // State for handling input value
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  // Event handler for input change
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    createNotif(title, message);
    setTitle("");
    setMessage("");
  };

  // Rendering the AddTodo component
  return (
    <div className="w-[700px] flex flex-col gap-1 mt-2 bg-neutral-500">
      {/* Input field for entering new todo text */}
      <div className="flex flex-row gap-2 items-center">
        <div className="w-[70px]">
          <label htmlFor="Title">Title:</label>
        </div>
        <div>
          <input
            type="text"
            className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
            onChange={handleTitle}
            value={title}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
          <div className="w-[70px] h-full  items-start">
            <label htmlFor="Message">Message:</label>
          </div>
        <div>
          <textarea
            className="w-[600px] h-[250px] ml-[80px] px-2 py-1 border border-gray-200 rounded outline-none"
            onChange={handleMessage}
            value={message}
          />
        </div>
      </div>
      {/* Button for adding a new todo */}
      <div className="text-center w-full  mt-2" >
        <button
          className=" bg-green-600 text-green-50 rounded px-2 h-9 w-14 py-1"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNotif;
