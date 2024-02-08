'use client'

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "@/Redux/slices/todoSlice";
import { useAppSelector } from "@/Redux/Hooks";
import variables from "../styles/variables.module.scss";
import { MdDelete } from "react-icons/md";
import { Checkbox } from "@nextui-org/react";
import dynamic from "next/dynamic";


const Todo = () => {
	const dispatch = useDispatch();
	const todos = useAppSelector((s) => s.todo.todos);

	const [date, setDate] = useState(new Date())

	const getDate = () => {
		return date.toString()
	}

	return (
		<div className="di">
			{todos.map((todo) => (
				<li className="li" key={todo.id}>
					<div className="Checkbox">
						<input type="checkbox" />
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
