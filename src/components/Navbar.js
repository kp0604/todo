import React from 'react';

import todo1 from './todo1.png'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions'
import { useSelector } from "react-redux";

const Navbar = () => {
const User = useSelector((state) => state.User);
const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logoutUser())
    console.log("logout in navbar")
}

    return (
      <div className="w-screen bg-yellow-400 flex lg:justify-around justify-between p-3 fixed">
        <div className="flex p-1">
          <img src={todo1} className="w-8 h-8 mx-2"></img>
          <p className=" text-2xl font-semibold ">Todo-List</p>
        </div>
        {User.isLoggedin?<button onClick={() => handleClick()} className="text-xl border-2 border-black px-2 py-1 rounded">
          Log-out
        </button>:null}
      </div>
    );
};

export default Navbar;