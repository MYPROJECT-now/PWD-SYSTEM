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

  // Function to create a new todo item
  // const createTodo = (pwdNo: string, surname: string, name: string) => {
  //   const id = (todoItems.at(-1)?.id || 0) + 1;
  //   addTodo(id, pwdNo, surname, name);
  //   setTodoItems((prev) => [...prev, { id: id, pwdNo, surname, name, done: false }]);
  // };

  // Function to change the text of a todo item
  const changeTodoText = (id: number, pwdNo: string, surname: string, name: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, pwdNo, surname, name } : todo))
    );
    editTodo(id, pwdNo, surname, name);
  };

  // Function to toggle the "done" status of a todo item
  // const toggleIsTodoDone = (id: number) => {
  //   setTodoItems((prev) =>
  //     prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
  //   );
  //   toggleTodo(id);
  // };

  // Function to delete a todo item
  const deleteTodoItem = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  // Rendering the Todo List component

  return (
    <main className="items-center px-5">
        {/* Mapping through todoItems and rendering Todo component for each */}
        <table className="w-full table-auto mt-8 gap-2  border-collapse">
          <thead>
            <tr>
              <th className="border border-black">ID</th>
              <th className="border border-black">PwdNo</th>
              <th className="border border-black">Surname</th>
              <th className="border border-black">Name</th>
              {/* <th className="border border-black">Done</th> */}
              <th className="border border-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoItems.map((todo) => (
              <tr key={todo.id}>
              <Todo    
                todo={todo}
                changeTodoText={changeTodoText}
                // toggleIsTodoDone={toggleIsTodoDone}
                deleteTodoItem={deleteTodoItem}
              />
              </tr>
            ))}
            
          </tbody>
        </table>
        <Add_page />
      {/* Adding Todo component for creating new todos */}
      {/* <AddTodo createTodo={createTodo} /> */}
    </main>
  );

 






};
   // Rendering the Todo List component


export default Todos;