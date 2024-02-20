import { Item } from '@radix-ui/react-accordion';
import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type todoSlice = {
  // todos:[]; 
  id:string;
  tittle:string;
  desc:string,
  createdAt: Date,
  status : string
}

const initialState = {
  todos:[{id:"1" ,tittle:"hello world",desc:"assalamualaikum" , createdAt: new Date() , status:"incompleted"}],
  filter :'all' 
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
        console.log("TOFD" , action.payload);
        
        if (todo.id===action.payload.id){
          return {
            ...todo,
            status: action.payload.status ? 'completed': 'incompleted'
          }
        }
        return todo  
      })
    },
    // filterTodo:(state,action)=>{
    //   state.filteredTodos = state.todos.filter((Item)=>{
    //     if (action.payload.status === "incompleted"){
    //       return Item.status ==="incompleted"
    //     }else if (action.payload.status === "completed"){  
    //       return Item.status ==='completed'}
    //     else{true}
    //   })
    // }
  },
  
})

// Action creators are generated for each case reducer function
export const {addTodo,removeTodo ,completedTodo} = todoSlice.actions

export default todoSlice.reducer