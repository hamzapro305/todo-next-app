"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoType, TodosActions } from "@/Redux/slices/todoSlice";
import { FaEllipsisH } from "react-icons/fa";

// import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
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

type PropType = {
	todo: TodoType
}

const Todo = ({ todo }: PropType) => {

	const dispatch = useDispatch();

	const setStatus = (status: TodoType["status"]) => {
		console.log(status)
		dispatch(TodosActions.setTodo({
			id: todo.id,
			todo: {
				...todo,
				status: status
			}
		}))
	}

	return (
		<li className="li">
			<h1 className="checkbox">{todo.status === "completed" ? "tick" : "-"}</h1>
			<Accordion type="single" collapsible className="contentcontainer">
				<AccordionItem value="item-1" className="container">
					<AccordionTrigger className="tittle">
						{todo?.tittle}
					</AccordionTrigger>
					<AccordionContent className="desc">
						{todo?.desc}
						<p className="date" suppressHydrationWarning>
							{(new Date(todo.createdAt)).toString()}
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
						value={todo.status}
						onValueChange={(value) => setStatus(value as TodoType["status"])}
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
					dispatch(TodosActions.removeTodo(todo));
				}}
			>
				<RxCross2 size={22} />
			</button>
		</li>
	);
};

export default Todo;