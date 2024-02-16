"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completedTodo, removeTodo } from "@/Redux/slices/todoSlice";
import { useAppSelector } from "@/Redux/Hooks";
import variables from "../styles/variables.module.scss";
import { MdDelete } from "react-icons/md";
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

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useAppSelector((s) => s.todo.todos);

  const [date, setDate] = useState(new Date());
  const [comp, setcomp] = useState("_");
  const [position, setPosition] = React.useState("bottom");

  const getDate = () => {
    return date.toString();
  };
  console.log("TODOS", todos);

  return (
    <div className="di">
      {todos.map((todo, index) => (
        <li className="li" key={todo.id}>
          {/* <input
            id="cbx-42"
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

          {/* <div className="container">
            <h1 className="tittle">{todo.tittle}</h1>
            <h1 className="desc">{todo.desc}</h1>
            <p className="date" suppressHydrationWarning>
              {getDate()}
            </p>
          </div> */}

          <Accordion type="single" collapsible>
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
            <DropdownMenuTrigger asChild>
              <Button variant="outline"> . . . </Button>
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
                {/* <DropdownMenuRadioItem value="right">
                  Right
                </DropdownMenuRadioItem> */}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={() => {
              dispatch(removeTodo(todo));
            }}
          >
            {<MdDelete size={22} />}
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todo;
