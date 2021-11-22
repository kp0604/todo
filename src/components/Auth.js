import React, { useState } from "react";
import { regUser, logUser } from "../redux/actions";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const initialUserR = { emailR: "", passwordR: "" };
  const initialUserL = { emailL: "", passwordL: "" };

  const [userReg, setUserReg] = useState(initialUserR);
  const [userLog, setUserLog] = useState(initialUserL);

  const handleChangeInputR = (e) => {
    const { name, value } = e.target;
    setUserReg({ ...userReg, [name]: value });
  };
  const handleChangeInputL = (e) => {
    const { name, value } = e.target;
    setUserLog({ ...userLog, [name]: value });
  };

  const handleSubmitR = (e) => {
    e.preventDefault();
    // console.log(userReg);
    if (userReg.emailR && userReg.passwordR && userReg.passwordR.length >= 4) {
      dispatch(regUser(userReg));
      setUserReg(initialUserR)
    } else if (userReg.emailR && userReg.passwordR.length <= 4) {
      alert("Password Must be of minimum 4 characters!");
    } else {
      alert("Enter all fields!");
    }
  };
  const handleSubmitL = (e) => {
    e.preventDefault();
    // console.log(userLog);
    if (userLog.emailL && userLog.passwordL && userLog.passwordL.length >= 4) {
      dispatch(logUser(userLog));
      setUserLog(initialUserL);
    } else if (userLog.emailL && userLog.passwordL.length <= 4) {
      alert("Password Must be of minimum 4 characters!");
    } else {
      alert("Enter all fields!");
    }
  };

  return (
    <div className="p-4 flex flex-col justify-around items-center top-16 relative ">
      <p className="text-2xl p-4 md:mt-6 font-semibold">
        Create And Manage Your Todo Tasks !
      </p>
      <div
        className="p-4 md:my-6 w-full lg:w-1/2 md:w-3/4 flex flex-col lg:flex-row justify-center 
      items-center rounded-xl  border-2 border-black"
      >
        <form
          autoComplete="on"
          noValidate
          onSubmit={handleSubmitR}
          className="w-full flex flex-col"
        >
          <span className="text-2xl p-2 my-2 text-center font-semibold bg-yellow-300">
            Register
          </span>
          <input autoComplete="on"
            type="email"
            placeholder="Email"
            name="emailR"
            value={userReg.emailR}
            onChange={handleChangeInputR}
            className="px-8 py-3 my-1 border-2 border-black rounded-xl"
          ></input>
          <input autoComplete="on"
            type="password"
            placeholder="Password"
            name="passwordR"
            value={userReg.passwordR}
            onChange={handleChangeInputR}
            className="px-8 py-3 my-1 border-2 border-black rounded-xl"
          ></input>
          <button
            type="submit"
            className="p-1  my-6 border-2 border-black rounded-xl text-white bg-green-500"
          >
            Submit
          </button>
        </form>
        <span className="text-4xl md:p-8 ">OR</span>
        <form
          autoComplete="on"
          noValidate
          onSubmit={handleSubmitL}
          className="flex flex-col w-full"
        >
          <span className="text-2xl p-2 my-2 text-center font-semibold bg-yellow-300">
            Login
          </span>
          <input autoComplete="on"
            type="email"
            placeholder="Email"
            name="emailL"
            value={userLog.emailL}
            onChange={handleChangeInputL}
            className="px-8 py-3  my-1 border-2 border-black rounded-xl"
          ></input>
          <input autoComplete="on"
            type="password"
            placeholder="Password"
            name="passwordL"
            value={userLog.passwordL}
            onChange={handleChangeInputL}
            className="px-8 py-3  my-1 border-2 border-black rounded-xl"
          ></input>
          <button
            type="submit"
            className="p-1  my-6 border-2 border-black rounded-xl text-white bg-green-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
