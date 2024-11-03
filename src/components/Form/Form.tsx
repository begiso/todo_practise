import { useState } from "react";
import {
  FormControl,
  FormBlock,
  FormField,
  FormLabel,
  FormWrapper,
} from "./Form.styled";

import plusIcon from "../../assets/images/plus.png";

export const Form = (props: { createNewTodo: Function }) => {
  const [text, setText] = useState<string>("");

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (text && text.trim().length > 0) {
      props.createNewTodo(text);
      setText("");
    }
  };

  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormField
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <FormControl icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
