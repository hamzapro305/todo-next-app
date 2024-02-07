import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface todoSlice {
  // todos:[];
  id:string;
  tittle:string;
  desc:string
}

const initialState = {
  todos:[{id:"1" ,tittle:"hello world",desc:"assalamualaikum"}]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo:(state,action:PayloadAction<
      Pick<todoSlice, "tittle" |"desc">>) => {
      const todo ={
        id:nanoid(),
        tittle: action.payload.tittle,
        desc: action.payload.desc
      }
      state.todos.push(todo)
    },
    removeTodo:(state,action)=>{
      state.todos=state.todos.filter((todo)=>todo.id!==action.payload.id)  
    }
   
  },
})

// Action creators are generated for each case reducer function
export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer