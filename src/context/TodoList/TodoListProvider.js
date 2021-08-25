import React, { useReducer } from "react";
import TodoListContext from "./TodoListContext";
import TodoReducer from "./TodoListReducer";

import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./TodoListActions";
let id = 1;
const TodoProvider = ({ children }) => {
  const intialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(TodoReducer, intialState);
  const addTodo = (text) => {
    dispatch({
      type: ADD_TODO,
      payload: { id: id++, text, done: false },
    });
  };

  const toggleTodo = (todoID) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoID,
    });
  };

  const deleteTodo = (todoID) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };

  return (
    <TodoListContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoProvider;
