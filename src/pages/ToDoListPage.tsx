import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { createAction, deleteAction, updateAction } from "../feature/todoList";

export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos)
  const dispatch = useDispatch()

  const createNewTodo = (text: string) => {
    dispatch(createAction({ text }))
  };

  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem))
  };

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem))
  };
  return (
    <>
      <Form createNewTodo={createNewTodo} />
      <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
      
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
      
    </>
  );
};
