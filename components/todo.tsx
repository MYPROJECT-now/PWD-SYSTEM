"use client";
import { pwdType } from "@/types/todoTypes";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  todo: pwdType;
  changeTodoText: (id: number, pwdNo: string, surname: string, name: string) => void;
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

  // State for handling "done" status
  // const [isDone, setIsDone] = useState(todo.done);

  // Event handler for text input change
  const handlePwdNoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setpwdNo(e.target.value);
  };

  const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // // Event handler for toggling "done" status
  // const handleIsDone = async () => {
  //   toggleIsTodoDone(todo.id, !isDone);
  //   setIsDone((prev) => !prev);
  // };

  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Event handler for saving the edited text
  const handleSave = async () => {
    changeTodoText(todo.id, pwdNo, surname, name);
    setEditing(false);
  };

  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false);
    setpwdNo(todo.pwdNo);
    setSurname(todo.surname);
    setName(todo.name);
  };

  // Event handler for deleting a todo item
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodoItem(todo.id);
    }
  };


return (
  <>
    <td className="border border-black text-center">{todo.id}</td>
    <td className="border border-black">
      <input
        type="text"
        value={pwdNo}
        onChange={handlePwdNoChange}
        readOnly={!editing}
        className={`${
          todo.done ? "line-through" : ""
        } w-full text-center outline-none read-only:border-transparent focus:border border`}
      />
    </td>
    <td className="border border-black">
      <input
        type="text"
        value={surname}
        onChange={handleSurnameChange}
        readOnly={!editing}
        className={`${
          todo.done ? "line-through" : ""
        }  w-full text-center outline-none read-only:border-transparent focus:border  `}
      />
    </td>
    <td className="border border-black">
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        readOnly={!editing}
        className={`${
          todo.done ? "line-through" : ""
        } w-full text-center outline-none read-only:border-transparent focus:border border`}
      />
    </td>
    {/* <td className="border border-black text-center py-auto" >
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleIsDone}
        className="w-[35px] h-5 text-blue-200 rounded-sm "
      />
    </td> */}
    <td className="border border-black">
      <div className="flex items-center justify-center w-full gap-3">
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





  // Rendering the Todo component
//   return (
    
//     <div className="flex items-center gap-2 p-4 border-gray-200 border-solid border rounded-lg">
//       {/* Checkbox for marking the todo as done
//       <input
//         type="checkbox"
//         className="text-blue-200 rounded-sm h-4 w-4"
//         checked={isDone}
//         onChange={handleIsDone}
//       /> */}
//       {/* Input field for todo text */}

//       <input
//         type="text"
//         value={pwdNo}
//         onChange={handlePwdNoChange}
//         readOnly={!editing}
//         className={`${
//           todo.done ? "line-through" : ""
//         } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
//       />
//        <input
//         type="text"
//         value={surname}
//         onChange={handleSurnameChange}
//         readOnly={!editing}
//         className={`${
//           todo.done ? "line-through" : ""
//         } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
//       />
//        <input
//         type="text"
//         value={name}
//         onChange={handleNameChange}
//         readOnly={!editing}
//         className={`${
//           todo.done ? "line-through" : ""
//         } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
//       />
//       {/* Action buttons for editing, saving, canceling, and deleting */}
//       <div className="flex gap-1 ml-auto">
//         {editing ? (
//           <button
//             onClick={handleSave}
//             className="bg-green-600 text-green-50 rounded px-2 w-14 py-1"
//           >
//             Save
//           </button>
//         ) : (
//           <button
//             onClick={handleEdit}
//             className="bg-blue-400 text-blue-50 rounded w-14 px-2 py-1"
//           >
//             Edit
//           </button>
//         )}
//         {editing ? (
//           <button
//             onClick={handleCancel}
//             className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
//           >
//             Close
//           </button>
//         ) : (
//           <button
//             onClick={handleDelete}
//             className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
//           >
//             Delete
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };
