import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "@/Redux/slices/todoSlice";
import { useAppSelector } from "@/Redux/Hooks";
import variables from "../styles/variables.module.scss";
import { MdDelete } from "react-icons/md";
const Todo = () => {
  const dispatch = useDispatch();
  const todos = useAppSelector((s) => s.todo.todos);
  return (
    <div className={variables.di}>
      {todos.map((todo) => (
        <li className={variables.li} key={todo.id}>
          <div className={variables.container}>
            <h1 className={variables.tittle}>{todo.tittle}</h1>
            <h1 className={variables.desc}>{todo.desc}</h1>
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
