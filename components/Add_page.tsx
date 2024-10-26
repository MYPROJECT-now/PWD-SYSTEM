"use client";

import { useAddModal } from "@/store/use-add-modal";
import { useState } from "react";
// import Todo from "./todo";
import { addTodo} from "@/actions/todoAction";
import { AddTodo } from "./addTodo";


interface TodoItem {
  id: number;
  pwdNo: string;
  surname: string;
  name: string;
  done: boolean;
}

export const Add_page = () => {
  const { open } = useAddModal();
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const createTodo = (pwdNo: string, surname: string, name: string) => {
    const newId = todoItems.length > 0 ? todoItems[todoItems.length - 1].id + 1 : 1;
    const newTodoItem = {
      id: newId,
      pwdNo,
      surname,
      name,
      done: false,
    };
    setTodoItems([...todoItems, newTodoItem]);
    addTodo(newId, pwdNo, surname, name);
  };

  return (
    <div>
      <button 
      className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-[250px] py-1 mt-4"
      onClick={open}>
        ADD PWD MEMBER
      </button>
      <AddTodo createTodo={createTodo} />
    </div>
  );
};