"use client";
import { store } from "../Redux/store";
import { Provider } from "react-redux";
import AddTodo from "@/components/AddTodo";
import AllTodos from "@/components/AllTodos";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="main">
        <div className="pic">
          <h1 className="heading">TODO APP</h1>
        </div>
        <div className="wrap">
          <AddTodo />
          <AllTodos />
        </div>
      </div>
    </Provider>
  );
}
