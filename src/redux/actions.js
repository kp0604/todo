const addTodo = (todoObj) => {
  return (dispatch) =>
    dispatch({
      type: "addTodo",
        payload: {
            data: todoObj.todo,
            status : todoObj.status 
        },
    });
};
const updTodo = (uptodo) => {
  return (dispatch) =>
    dispatch({
      type: "updTodo",
        payload: {
        idx:uptodo.idx,
        },
    });
};

const delTodo = (todo) => {
  return (dispatch) =>
    dispatch({
      type: "delTodo",
      payload: todo,
    });
};

const regUser = (userObj) => {
    return (dispatch) =>
        dispatch({
            type: "regUser",
            payload: 
                userObj,
            
        })
}
const logUser = (userObj) => {
    return (dispatch) =>
        dispatch({
            type: "logUser",
            payload: 
              userObj,
              
            
        })
}
const logoutUser = () => {
    return (dispatch) =>
        dispatch({
            type: "logoutUser", 
        })
}

export { addTodo, delTodo,updTodo,regUser,logUser,logoutUser };
