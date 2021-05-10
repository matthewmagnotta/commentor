import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {setComments} from "../../store/slices/comments";
// material ui
import Button from "@material-ui/core/Button";
//elements
import {
  FormContainer,
  FForm,
  FormHeader,
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
        setComments([
          { name: commentName.value.toLowerCase(), body: commentText.value },
        ])
      );
      handleClose();
    }
  };

  return (
    <FormContainer>
    <FormHeader> Add Comment 😎 </FormHeader>
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
        <Button variant="contained" size='small' color="primary" type="submit">
          {" "}
          ADD COMMENT{" "}
        </Button>
      </FForm>
    </FormContainer>
  );
};
export default Form;
