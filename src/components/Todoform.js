import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import add from './add.png'

const Todoform = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ todo, status: false }));
  };

  return (
    <div className="p-2 flex justify-center absolute bottom-0 bg-white w-screen">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="flex w-full lg:w-3/5 border-1 border-black rounded-xl bg-gray-800 px-2 py-2"
      >
        <input
          placeholder="Enter Something....."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="focus:outline-none px-2 mx-2 text-xl text-white bg-gray-800 w-full"
        ></input>
        <button type="submit" className="py-1 px-2 mx-2  text-2xl ">
          <img
            src={add}
            width="35"
            height="35"
            className="rounded-xl bg-yellow-400"
          ></img>
        </button>
      </form>
    </div>
  );
};

export default Todoform;
