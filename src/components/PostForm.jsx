import React, { useState } from "react";
import { connect } from 'react-redux';

import TextField from "./Base/TextField";
import TextAreaField from "./Base/TextAreaField";
import Btn from "./Base/Btn";

const PostForm = (props) => {
  // Manage Post Form
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentHandler = (event) => {
    setContent(event.target.value);
  };

  const addPost = (event) => {
    event.preventDefault();
    props.addPost({
      id: Date().toString(),
      title: title,
      content: content,
    });
    props.hideForm()
  };

  return (
    <div className="bg-white border-t-8 border-yellow-500 rounded-lg shadow-2xl">
      <form className="px-4 py-4" onSubmit={addPost}>
        <div>
          <TextField
            value={title}
            onChange={titleHandler}
            placeholder="Title"
            label="Title"
          />
        </div>
        <div className="mt-4">
          <TextAreaField
            value={content}
            onChange={contentHandler}
            placeholder="Content"
          />
        </div>
        <div className="flex flex-row justify-end mt-6 space-x-3">
          <Btn className="text-gray-500 border-2 border-gray-500" onClick={props.hideForm}>Cancel</Btn>
          <Btn className="font-bold bg-blue-500" onClick={addPost}>Add</Btn>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: (payload) => dispatch({
      type: 'ADD_POST',
      payload: payload 
    })
  };
};

export default connect(null, mapDispatchToProps)(PostForm);
