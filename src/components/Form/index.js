import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/slices/comments";
// material ui
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//elements
import {
  FormContainer,
  FForm,
  FormInput,
  FormTextArea,
} from "./FormElements.js";

// creating a custom hook to get the input values from the form
const useInputValue = (intailValue) => {
  const [value, setValue] = useState("");
  //Then we spread these values onto the component
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
};

//Form takes in the comments array and action from the store then on submit it calls the action with the values from the form inputs
const Form = (props) => {
  let { handleClose } = props;
  const dispatch = useDispatch();

  // input values from the form
  const commentText = useInputValue("");
  const commentName = useInputValue("");

  //submit function to handle the calling the action with the form values
  const handleSubmit = (e) => {
    if (!commentName.value) {
      alert("Name can't be blank");
    } else if (!commentText.value) {
      alert("Comment can't be blank");
    } else {
      dispatch(
        incrementByAmount([
          { name: commentName.value.toLowerCase(), body: commentText.value },
        ])
      );
      handleClose();
    }
  };

  return (
    <FormContainer>
      <FForm
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <FormInput
          placeholder="Name (First Last)"
          autoFocus={true}
          {...commentName}
        />
        <FormTextArea
          placeholder="Start typing to add your comment"
          {...commentText}
        />
        <Button variant="contained" color="primary" type="submit">
          {" "}
          ADD COMMENT{" "}
        </Button>
      </FForm>
    </FormContainer>
  );
};
export default Form;
