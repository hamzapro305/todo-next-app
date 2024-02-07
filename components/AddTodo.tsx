import { addTodo } from "@/Redux/slices/todoSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import variables from "../styles/variables.module.scss";

const AddTodo = () => {
  const [tittle, settittle] = useState("");
  const [desc, setdesc] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!(tittle && desc)) return alert("Please fill out all fields!");
    dispatch(addTodo({ tittle, desc }));
    settittle("");
    setdesc("");
    setIsOpen(false);
  };

  return (
    <div className={variables.Addmain}>
      <button onClick={() => setIsOpen(!isOpen)} className={variables.Addbtn}>
        Add Task
      </button>
      {isOpen && (
        <form className={variables.form}>
          <input
            className={variables.Inptitle}
            type="text"
            placeholder="Enter tittle here"
            value={tittle}
            onChange={(e) => {
              settittle(e.target.value);
            }}
          />
          <input
            className={variables.Inpdesc}
            type="text"
            placeholder="Enter description here"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className={variables.Submit} onClick={submitHandler}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AddTodo;
