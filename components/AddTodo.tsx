import { addTodo } from "@/Redux/slices/todoSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import variables from "../styles/variables.module.scss";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AddTodo = () => {
  const [tittle, settittle] = useState("");
  const [desc, setdesc] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  const [date, setdate] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!(tittle && desc)) return alert("Please fill out all fields!");
    dispatch(addTodo({ tittle, desc, createdAt: new Date() }));
    settittle("");
    setdesc("");
    // setIsOpen(false);
  };

  return (
    <div className="Addmain">
      {/* <button onClick={() => setIsOpen(!isOpen)} className="Addbtn">
        Add Task
      </button> */}
      {/* {isOpen && ( */}
      <form className="form">
        <input
          className="Inptitle"
          type="text"
          placeholder="Enter tittle here"
          value={tittle}
          onChange={(e) => {
            settittle(e.target.value);
          }}
        />
        <input
          className="Inpdesc"
          type="text"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="Submit" onClick={submitHandler}>
          Submit
        </button>
      </form>
      {/* )} */}
    </div>
  );
};

export default AddTodo;
