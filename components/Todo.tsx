"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completedTodo, removeTodo } from "@/Redux/slices/todoSlice";
import { useAppSelector } from "@/Redux/Hooks";
import variables from "../styles/variables.module.scss";
import { MdDelete } from "react-icons/md";
import { Checkbox } from "@nextui-org/react";
import dynamic from "next/dynamic";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useAppSelector((s) => s.todo.todos);

  const [date, setDate] = useState(new Date());

  const getDate = () => {
    return date.toString();
  };

  return (
    <div className="di">
      {todos.map((todo) => (
        <li className="li" key={todo.id}>
          <div className="checkbox-wrapper-42 make-center">
            <input
              id="cbx-42"
              key={todo.id}
              className="checkbox"
              type="checkbox"
              checked={todo.status === "completed"}
              onClick={(e: any) => {
                dispatch(completedTodo({ ...todo, status: e.target.checked }));
              }}
            />
            <label className="cbx" htmlFor="cbx-42"></label>
            <label className="lbl" htmlFor="cbx-42"></label>
          </div>
          <div className="container">
            <h1 className="tittle">{todo.tittle}</h1>
            <h1 className="desc">{todo.desc}</h1>
            <p className="date" suppressHydrationWarning>
              {getDate()}
            </p>
          </div>
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
