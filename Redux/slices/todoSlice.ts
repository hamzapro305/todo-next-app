import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type todoSlice = {
  // todos:[];
  id:string;
  tittle:string;
  desc:string,
  createdAt: Date,
  status : "completed" | "incompleted"
}

const initialState = {
  todos:[{id:"1" ,tittle:"hello world",desc:"assalamualaikum" , createdAt: new Date() , status:"incompleted"}],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo:(state,action:PayloadAction<Partial<todoSlice>>) => {
      const todo ={
        id:nanoid(),
        tittle: action.payload.tittle ?? '',
        desc: action.payload.desc ?? '',
        createdAt: action.payload.createdAt ?? new Date(),
        status: 'incompleted'
      }
      state.todos.push(todo)
    },
    removeTodo:(state,action)=>{
      state.todos=state.todos.filter((todo)=>todo.id!==action.payload.id)  
    },
    completedTodo:(state,action)=>{
      state.todos=state.todos.map((todo)=>{
        if (todo.id===action.payload.id){
          return {
            ...todo,
            status: action.payload.status ? 'completed': 'incompleted'
          }
        }
        return todo  
      })
    }
   
  },
})

// Action creators are generated for each case reducer function
export const {addTodo,removeTodo ,completedTodo} = todoSlice.actions

export default todoSlice.reducer