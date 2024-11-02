import { useState } from "react";
import "./Form.css";

export const Form = (props: { createNewTodo: Function }) => {
  const [text, setText] = useState<string>("");

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (text && text.trim().length > 0) {
      props.createNewTodo(text);
      setText("");
    }
  };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
