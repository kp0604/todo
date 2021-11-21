// import "./App.css";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import TodoSection from "./components/TodoSection";
import { Routes, Route,useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";


function App() {
const User = useSelector((state) => state.User);
  const Navigate = useNavigate()
  
  useEffect(() => {
    if (User.isLoggedin) {
    Navigate("/todos")
    }
    else {
      Navigate("/")
    }
  },[User.isLoggedin,Navigate])


  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/todos" element={<TodoSection/>} />
      </Routes>

 
    </div>
  );
}

export default App;
