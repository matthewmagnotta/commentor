import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setComments} from "../../store/slices/comments";
//Material UI
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
//elements
import {
  CommentContainer,
  Comment,
  CommentName,
  CommentBody,
} from "./CommentElements";

const useStyles = makeStyles((theme) => ({
  blue: {
    color: "white",
    backgroundColor: "#00BCD4",
  },
}));

// Comments component receives the state from the store and then maps through the array returning jsx with the values.
const Comments = (props) => {
  //getting the comments array from the store
  const comments = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const classes = useStyles();

  //fetching data and setting the comments array with the response
  useEffect(() => {
    const fetchData = async () => {
     try {
       const result = await axios("https://jsonplaceholder.typicode.com/comments");
       dispatch(setComments(result.data));
     } catch (error) {
       console.log(error)
     }
    };
    fetchData();
  }, []);

  return (
    <CommentContainer>
      {comments.map((comment, index) => {
        return (
          <Comment key={index}>
            <Avatar className={classes.blue}>
              {comment.name.slice(0, 1).toUpperCase()}
            </Avatar>
            <div>
              <CommentName> {comment.name} </CommentName>
              <CommentBody> {comment.body} </CommentBody>
            </div>
          </Comment>
        );
      })}
    </CommentContainer>
  );
};
export default Comments;
