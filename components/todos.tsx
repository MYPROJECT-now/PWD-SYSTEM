"use client";
import { FC, useState } from "react";
import Todo from "./todo";
import { deleteTodo, editTodo } from "@/actions/todoAction";
import { pwdType } from "@/types/todoTypes";
import { Add_page } from "./Add_page";
import { Button } from "./ui/button";

interface Props {
  todos: pwdType[];
}

const Todos: FC<Props> = ({ todos }) => {
  const [todoItems, setTodoItems] = useState<pwdType[]>(todos);
  const [searchResults, setSearchResults] = useState<pwdType[]>([]);
  const [selectedPurok, setSelectedPurok] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredTodoItems = todoItems.filter(
    (todo) => todo.Purok === selectedPurok || selectedPurok === ""
  );

  const displayedTodos =
    searchQuery !== "" ? searchResults : filteredTodoItems;

  // Paginated data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = displayedTodos.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(displayedTodos.length / itemsPerPage);

  const changeTodoText = (id: number, pwdNo: string, surname: string, name: string, middlename: string, purok: string,
    age: number, contactNo: string, issueDate: string, expiryDate: string,  typeOfDisability: string, status: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, pwdNo, surname, name, middlename, purok,
        age, contactNo, issueDate, expiryDate, typeOfDisability, status } : todo))
    );
    editTodo(id, pwdNo, surname, name, middlename, purok,
      age, contactNo, issueDate, expiryDate, typeOfDisability, status);
  };

  const deleteTodoItem = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  return (
    <main className="px-[20px] mt-5">
      <div className="flex gap-3">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search PWD MEMBERS"
          className="pl-2 border-gray-300 border-2 rounded-md py-2 w-[400px]"
        />
        <select
          value={selectedPurok}
          onChange={(e) => setSelectedPurok(e.target.value)}
          className="border-gray-300 border-2 rounded-md py-2.5"
        >
          <option value="">Purok</option>
          {["Purok 1", "Purok 2", "Purok 3", "Purok 4", "Purok 5", "Purok 6", "Purok 7"].map((purok) => (
            <option key={purok} value={purok}>
              {purok}
            </option>
          ))}
        </select>
        <Button
          variant="signin"
          size="lg"
          onClick={() => {
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
        >
          Search
        </Button>
        <Button
          variant="signin"
          size="lg"
          onClick={() => {
            setSelectedPurok("");
            setSearchQuery("");
            setSearchResults([]);
          }}
        >
          Clear Filter
        </Button>
      </div>

      <div className="max-w-[900px] xl:max-w-[1100px] overflow-auto">
        <table className="mt-3 border-collapse mx-auto">
          <thead>
            <tr>
              <th className="border border-black px-1 min-w-[10px]">IssuanceDate</th>
              <th className="border border-black px-1 min-w-[10px]">PwdNo</th>
              <th className="border border-black px-1 min-w-[130px]">Surname</th>
              <th className="border border-black px-1 min-w-[130px]">Name</th>
              <th className="border border-black px-1 min-w-[130px]">Middlename</th>
              <th className="border border-black px-1 min-w-[100px]">Address</th>
              <th className="border border-black px-1 min-w-[20px]">Age</th>
              <th className="border border-black px-1 min-w-[130px]">ContactNo</th>
              <th className="border border-black px-1">ExpiryDate</th>
              <th className="border border-black px-1 min-w-[255px]">Type of Disability</th>
              <th className="border border-black px-4">Status</th>
              <th className="border border-black px-10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((todo) => (
              <tr key={todo.id}>
                <Todo
                  todo={todo}
                  changeTodoText={changeTodoText}
                  deleteTodoItem={deleteTodoItem}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center gap-3 mt-5">
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </Button>
      </div>

      <Add_page />
    </main>
  );
};

export default Todos;
