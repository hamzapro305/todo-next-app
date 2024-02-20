"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completedTodo, removeTodo } from "@/Redux/slices/todoSlice";
import { useAppSelector } from "@/Redux/Hooks";
import variables from "../styles/variables.module.scss";
import { FaEllipsisH } from "react-icons/fa";

// import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Checkbox } from "@nextui-org/react";
import dynamic from "next/dynamic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// type todoSlice = {
//   // todos:[];
//   id: string;
//   tittle: string;
//   desc: string;
//   createdAt: Date;
//   status: string;
// };

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useAppSelector((s) => s.todo.todos);
  // const filter = useAppSelector((s) => s.todo.filter);

  // const [filteredTodo, setFilteredTodo] = useState<todoSlice[]>([]);

  const [date, setDate] = useState(new Date());
  const [comp, setcomp] = useState("-");
  const [position, setPosition] = React.useState("bottom");

  const handleFilter = (filter: string) => {
    // if (filter === "all") {
    //   setFilteredTodo(todos);
    // } else {
    //   const updatedFilteredTodo = todos.filter((f) => f.status === filter);
    //   setFilteredTodo(updatedFilteredTodo);
    // }
  };

  const getDate = () => {
    return date.toString();
  };

  return (
    <div className="di">
      {todos.map((todo, index) => (
        <li className="li" key={todo.id}>
          {/* <input
            key={todo.id}
            className="checkbox"
            type="checkbox"
            // style={{ backgroundColor: "red" }}
            checked={todo.status === "completed"}
            onClick={(e: any) => {
              dispatch(
                completedTodo({ id: todo.id, status: e.target.checked })
              );
            }}
          /> */}
          <h1
            className="checkbox"
            key={todo.id}
            onClick={(e: any) => {
              todo.status === "completed";
              setcomp("✓");
              dispatch(
                completedTodo({ id: todo.id, status: e.target.checked })
              );
            }}
          >
            {comp}
          </h1>
          <Accordion type="single" collapsible className="contentcontainer">
            <AccordionItem value="item-1" className="container">
              <AccordionTrigger className="tittle">
                {todo.tittle}
              </AccordionTrigger>
              <AccordionContent className="desc">
                {todo.desc}
                <p className="date" suppressHydrationWarning>
                  {getDate()}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="dropdown">
              <Button variant="ghost" className="btn">
                <FaEllipsisH size={22} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Todo Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="completed">
                  completed
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="incompleted">
                  pending
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={() => {
              dispatch(removeTodo(todo));
            }}
          >
            {/* {<MdDelete size={22} />} */}
            {<RxCross2 size={22} />}
          </button>
        </li>
      ))}
      <footer className="footer">
        <h1>items left</h1>
        <div className="pagination">
          <h1>All</h1>
          <h1>Active</h1>
          <h1>Completed</h1>
        </div>
        <h1>clear completed</h1>
      </footer>
    </div>
  );
};

export default Todo;
{
  /* <Button onClick={() => handleFilter("all")}>all</Button>
<Button onClick={() => handleFilter("incompleted")}>active</Button>
<Button onClick={() => handleFilter("completed")}>completed</Button> */
}
