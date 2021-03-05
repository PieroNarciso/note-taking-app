import React, { useState } from 'react';
import { connect } from 'react-redux';

import TextField from './Base/TextField';
import TextAreaField from './Base/TextAreaField';
import Btn from './Base/Btn';

const PostForm = (props) => {
  // Manage Post Form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('white');

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentHandler = (event) => {
    setContent(event.target.value);
  };
  /**
   * Change color State
   *
   * @param {'red' | 'blue' | 'green' | 'white'} color
   */
  const changeColor = (color) => {
    setColor(color);
  };

  /**
   * @param {HTMLFormElement} event
   */
  const addPost = (event) => {
    event.preventDefault();
    props.addPost({
      id: Date().toString(),
      title: title,
      content: content,
      color: color,
    });
    props.hideForm();
  };

  return (
    <div className="bg-white border-t-8 border-yellow-500 rounded-lg shadow-2xl">
      <form className="px-4 py-4" onSubmit={addPost}>
        <div className="flex space-x-3">
          <h1 className="font-medium">Color:</h1>
          <div
            onClick={() => changeColor('blue')}
            className={
              'p-3 bg-blue-300 border-2 rounded-full outline-none cursor-pointer ' +
              (color === 'blue' ? 'border-gray-500' : 'border-gray-300')
            }
          ></div>
          <div
            onClick={() => changeColor('red')}
            className={
              'p-3 bg-red-300 border-2 rounded-full outline-none cursor-pointer ' +
              (color === 'red' ? 'border-gray-500' : 'border-gray-300')
            }
          ></div>
          <div
            onClick={() => changeColor('green')}
            className={
              'p-3 bg-green-300 border-2 rounded-full outline-none cursor-pointer ' +
              (color === 'green' ? 'border-gray-500' : 'border-gray-300')
            }
          ></div>
          <div
            onClick={() => changeColor('white')}
            className={
              'p-3 bg-white border-2 rounded-full outline-none cursor-pointer ' +
              (color === 'white' ? 'border-gray-500' : 'border-gray-300')
            }
          ></div>
        </div>
        <div className="mt-3">
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
          <Btn
            className="text-gray-500 border-2 border-gray-500"
            onClick={props.hideForm}
          >
            Cancel
          </Btn>
          <Btn className="font-bold bg-blue-500" onClick={addPost}>
            Add
          </Btn>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (payload) =>
      dispatch({
        type: 'ADD_POST',
        payload: payload,
      }),
  };
};

export default connect(null, mapDispatchToProps)(PostForm);
