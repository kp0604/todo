import { combineReducers } from "redux";

const todoRed = (state = [], action) => {
  // console.log(action);
  // console.log(state);
  if (action.type === "addTodo") {
    if (state === []) {
      // console.log("in add red1");
      // console.log(action.payload.data);
      return [action.payload];
    } 
     else {
      // console.log("in add red");
      return [...state, action.payload];
    }
  } else if (action.type === "delTodo") {
    state.splice(action.payload, 1);
    // console.log(state);
    return [...state];
  } else if (action.type === "updTodo") {
    state[action.payload.idx].status = !state[action.payload.idx].status;
    // console.log(state);
    // console.log("in up");
    return [...state];
  } else {
    return state;
  }
};

const checkUser = (usob, starr) => {
  for (let key of starr) {
    if (usob.emailR === key.emailR) {
      return true;
    } else {
      return false;
    }
  }
};

const authRed = (state = { user: null, isLoggedin: false }, action) => {
  // console.log(action);
  // console.log(state);
  if (action.type === "regUser") {
    if (state.user === null || !checkUser(action.payload, state.user)) {
      // console.log("in auth red1");
      // console.log(action.payload);
    //   alert("RegisteredR");
      return { user: [action.payload], isLoggedin: true };
    } else if (checkUser(action.payload, state.user)) {
      alert("User already exists....Please Login to continue.");
      return state;
    } else {
      // console.log("in auth red");
      alert("RegisteredR");
      return { user: [...state.user, action.payload], isLoggedin: true };
    }
  } else if (action.type === "logUser") {
    const { emailL, passwordL } = action.payload;

    for (let user of state.user) {
      if (emailL === user.emailR && passwordL === user.passwordR) {
        // alert("loggedin");
        return { user: [...state.user], isLoggedin: true };
      } else {
          alert("wrong credentials");
          return { user: [...state.user], isLoggedin: false };
      }
    }
  } else if (action.type === "logoutUser") {
    return { user: [...state.user], isLoggedin: false };
  } else {
    return state;
  }
};

const reducer = combineReducers({ Todo: todoRed, User: authRed });

export default reducer;
