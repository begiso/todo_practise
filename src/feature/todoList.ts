import { createSlice } from "@reduxjs/toolkit";
import type { createAction, PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "../models/todo-item";
import { Flip, toast } from "react-toastify";

export interface ToDoState {
  todos: ToDo;
}

const initialState: ToDoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: ToDo = {
        id: state.todos.length,
        text: action.payload.text,
        isDone: false,
      };
      state.todos.push(newToDo);
      toast.info("Задача создана!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
          if (todo.isDone) {
            toast.success("Задача выполнена!", {
              position: "top-left",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Flip,
            });
          }
        }
        return todo;
      });
      state.todos = newTodos;
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.todos = newTodos;
      toast.error("Задача удалена", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    },
  },
});

export const { createAction, updateAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;
