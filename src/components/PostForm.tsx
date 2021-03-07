import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TextField from './Base/TextField';
import TextAreaField from './Base/TextAreaField';
import Btn from './Base/Btn';
import { IPost } from '../types';

interface Props {
  addPost: (post: IPost) => void;
  hideForm: () => void;
  editPost?: (payload: IPost) => void;
  post?: IPost;
}

const PostForm: React.FC<Props> = (props) => {
  // Manage Post Form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState<IPost['color']>('white');

  useEffect(() => {
    if (props.post) {
      setTitle(props.post.title);
      setContent(props.post.content);
      setColor(props.post.color);
    }
  }, [props.post]);

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const contentHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const changeColor = (color: IPost['color']) => {
    if (!color) return;
    setColor(color);
  };

  /**
   * Edit `content` `title` `color`
   */
  const editPostItem = () => {
    if (props.editPost && props.post) {
      props.editPost({
        ...props.post,
        color: color,
        title: title,
        content: content,
      });
    }
  };

  /**
   * Add Post or Edit existing post if `post {IPost}` in props
   * is aviable
   */
  const addPost = (event: React.FormEvent) => {
    event.preventDefault();
    if (props.post) {
      editPostItem();
    } else {
      props.addPost({
        id: Date().toString(),
        title: title,
        content: content,
        color: color,
      });
    }
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
            {props.post ? 'Edit' : 'Add'}
          </Btn>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: (payload: IPost) => {
      dispatch({
        type: 'ADD_POST',
        payload: payload,
      });
    },
    editPost: (payload: IPost) => {
      dispatch({
        type: 'EDIT_POST',
        payload: payload,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(PostForm);
