import React from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

const TodoSection = () => {
  return (
    <>
      <Todolist />
      <Todoform />
    </>
  );
};

export default TodoSection;
