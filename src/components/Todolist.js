import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delTodo, updTodo } from "../redux/actions";

import del2 from './del2.png'
import addnotes from './addnotes.png'

const Todolist = () => {
  const dispatch = useDispatch();

  const Todos = useSelector((state) => state.Todo);
  console.log(Todos);

  const handleClick = (idx) => {
    // e.preventDefault()

    dispatch(delTodo(idx));
  };
  const handleChange = (idx) => {
    // e.preventDefault()

    dispatch(updTodo({ idx: idx }));
    console.log("in chan");
  };

  return (
    <div className="p-4 top-16 bottom-20 absolute overflow-y-scroll w-screen">
      {Todos !== null ? (
        Todos.map((todo, idx) => {
          return (
            <div
              key={idx}
              className="mx-auto px-4 py-2 my-4  flex items-center rounded-xl md:w-1/2 bg-gray-100 shadow"
            >
              <input
                type="checkbox"
                onChange={() => handleChange(idx)}
                className="mr-4  w-5 h-5"
              ></input>
              <p
                className={
                  todo.status
                    ? "px-4 line-through break-all text-xl text-left flex-grow "
                    : "px-4 text-black break-all text-xl text-left flex-grow"
                }
              >
                {todo.data}
              </p>
              <button onClick={() => handleClick(idx)} className=" ml-4">
                <img src={del2} width="35" height="35"></img>
              </button>
            </div>
          );
        })
      ) : (
                  <div className="flex flex-col justify-around  h-full">
                      <p className="text-3xl text-center">Add Some Todos .....</p>
          <img src={addnotes} className=" lg:w-96  mx-auto" ></img>
        </div>
      )}
    </div>
  );
};

export default Todolist;
