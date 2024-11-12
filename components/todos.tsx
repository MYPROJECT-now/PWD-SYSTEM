"use client";
import { FC, useState } from "react";
import Todo from "./todo";
import { deleteTodo, editTodo } from "@/actions/todoAction";
import { pwdType } from "@/types/todoTypes";
import { Add_page } from "./Add_page";

interface Props {
  todos: pwdType[];
}

const Todos: FC<Props> = ({ todos }) => {
  // State to manage the list of todo items
  const [todoItems, setTodoItems] = useState<pwdType[]>(todos);

  // state for search
  const [searchResults, setSearchResults] = useState<pwdType[]>([]);




  // Function to change the text of a todo item
  const changeTodoText = (id: number, pwdNo: string, surname: string, name: string, middlename: string, purok: string,
    age: number, contactNo: string, issueDate: string, expiryDate: string,  typeOfDisability: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, pwdNo, surname, name, middlename, purok,
        age, contactNo, issueDate, expiryDate, typeOfDisability, } : todo))
    );
    editTodo(id, pwdNo, surname, name, middlename, purok,
      age, contactNo, issueDate, expiryDate, typeOfDisability);
  };


  // Function to delete a todo item
  const deleteTodoItem = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };


  //filtering method
  // Add a new state to store the selected Purok value
const [selectedPurok, setSelectedPurok] = useState('');

// search engine
const [searchQuery, setSearchQuery] = useState('');

// Filter the todoItems based on the selected Purok value
const filteredTodoItems = todoItems.filter((todo) => todo.Purok === selectedPurok || selectedPurok === '');

  // Rendering the Todo List component

  return (
    <main className="px-[20px] mt-5">
       {/* Add a search input field */}
    <div className="flex gap-3">

    <input
      type="search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search PWD MEMBERS"
      className="pl-2 border-gray-300 border-2 rounded-md py-2 w-[400px]"
    />

       {/* Mapping through todoItems and rendering Todo component for each */}
       <select value={selectedPurok} onChange={(e) => setSelectedPurok(e.target.value)} 
       className="border-gray-300 border-2 rounded-md py-2.5">
        <option value="">Purok</option>
          {["Purok 1", "Purok 2", "Purok 3", "Purok 4", "Purok 5", "Purok 6", "Purok 7"].map((purok) => (
            <option key={purok} value={purok}>
              {purok}
            </option>
          ))}
        </select>

<button
  type="button"
  onClick={() => {
    // Filter the todoItems based on the search query
    const filteredItems = todoItems.filter((todo) => {
      const query = searchQuery.toLowerCase();
      return (
        todo.pwdNo.toLowerCase().includes(query) ||
        todo.surname.toLowerCase().includes(query) ||
        todo.name.toLowerCase().includes(query)
      );
    });
    setSearchResults(filteredItems);
  }}

  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
  Search
</button>
        <button 
         onClick={() => {
          setSelectedPurok(''); 
          setSearchQuery('');
          setSearchResults([]);
          }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">   
          Clear Filter
        </button>

        </div>

<div className="max-w-[1100px] overflow-x-auto">
          <table className=" mt-3 border-collapse mx-auto w-full">
  <thead>
    <tr>
      <th className="border border-black px-1">IssuanceDate</th>
      <th className="border border-black px-1">PwdNo</th>
      <th className="border border-black px-1">Surname</th>
      <th className="border border-black px-1">Name</th>
      <th className="border border-black px-1">Middlename</th>
      <th className="border border-black px-1">Address</th>
      <th className="border border-black">Age</th>
      <th className="border border-black px-1">ContactNo</th>
      <th className="border border-black px-1">ExpiryDate</th>
      <th className="border border-black px-1">Type of Disability</th>

      {/* <th className="border border-black">Done</th> */}
      <th className="border border-black px-10">Actions</th>
    </tr>
  </thead>

  {searchQuery !== '' ? (
  searchResults.length > 0 ? (
    <tbody>
      {/* Render the filtered items */}
      {searchResults.map((todo) => (
        <tr key={todo.id}>
          <Todo
            todo={todo}
            changeTodoText={changeTodoText}
            deleteTodoItem={deleteTodoItem}
          />
        </tr>
      ))}
    </tbody>
  ) : (
    <tbody>
      <tr>
        <td colSpan={11} className="text-center">Nothing found</td>
      </tr>
    </tbody>
  )
) : (
  <tbody>
    {filteredTodoItems.map((todo) => (
      <tr key={todo.id}>
        <Todo    
          todo={todo}
          changeTodoText={changeTodoText}
          deleteTodoItem={deleteTodoItem}
      />
      </tr>
    ))}
  </tbody>
)}
        </table>

        </div>


        <Add_page />
      {/* Adding Todo component for creating new todos */}
      {/* <AddTodo createTodo={createTodo} /> */}
    </main>
  );

};


export default Todos;
