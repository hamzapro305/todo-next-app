import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TodoType = {
	id: string;
	tittle: string;
	desc: string,
	createdAt: number,
	status: "completed" | "incompleted"
}

export type TodoSliceInitalStateType = {
	todos: TodoType[]
	filter: "all" | "incompleted" | "completed"
}

const initialState: TodoSliceInitalStateType = {
	todos: [{ id: "1", tittle: "hello world", desc: "assalamualaikum", createdAt: (new Date()).getTime(), status: "incompleted" }],
	filter: 'all'
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Partial<TodoType>>) => {
			const todo: TodoType = {
				id: nanoid(),
				tittle: action.payload.tittle ?? '',
				desc: action.payload.desc ?? '',
				createdAt: (new Date()).getTime(),
				status: 'incompleted'
			}
			state.todos.push(todo)
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
		},
		setFilter: (state, action: PayloadAction<Partial<TodoSliceInitalStateType["filter"]>>) => {
			state.filter = action.payload
		},
		setTodo: (state, action: PayloadAction<Partial<{ id: string, todo: TodoType }>>) => {
			state.todos = state.todos.slice().map(todo => {
				if (todo.id === action.payload.id) {
					return action.payload.todo
				} else {
					return todo
				}
			}) as TodoSliceInitalStateType["todos"]
		}
	},

})

// Action creators are generated for each case reducer function
export const TodosActions = todoSlice.actions

export default todoSlice.reducer