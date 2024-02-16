"use client";
import Image from "next/image";
import { store } from "../Redux/store";
import { Provider } from "react-redux";
import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo";
import variables from "../styles/variables.module.scss";
import test from "../app/src/test.jpeg";
import redux from "../app/src/redux.jpeg";
import next from "../app/src/next.png";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="main">
        <div className="pic">
          <h1 className="heading">TODO APP</h1>
        </div>
        <div className="wrap">
          <AddTodo />
          <Todo />
        </div>
      </div>
    </Provider>
  );
}
