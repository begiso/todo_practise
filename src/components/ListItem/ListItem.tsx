import { Link } from "react-router-dom";
import { ToDo } from "../../models/todo-item";
import styles from "./ListItem.module.css";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <Link
      className={`${styles.link} ${todo.isDone ? styles.done : styles.notDone}`}
      to={`/list/${todo.id}`}
      target="_blank"
      rel="noreferrer"
    >
      {todo.text}
    </Link>
  );
};
