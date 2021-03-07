import React, { useState } from 'react';

import Btn from './Base/Btn';
import { IPost } from '../types';
import PostForm from './PostForm';

interface Props {
  post: IPost;
  color: IPost['color'];
  title: IPost['title'];
  content: IPost['content'];
  deletePost: () => void;
  editPost?: () => void;
}

const Post: React.FC<Props> = (props) => {
  const colorCls = () => {
    switch (props.color) {
      case 'red':
        return 'bg-red-300';
      case 'blue':
        return 'bg-blue-300';
      case 'green':
        return 'bg-green-300';
      default:
        return 'bg-white';
    }
  };

  const [postHeight, setPostHeight] = useState('h-48');
  const [overflowText, setOverflowText] = useState('h-32 overflow-hidden');
  const [editPost, setEditPost] = useState(false);

  const editPostHandler = () => {
    setEditPost(true);
  };
  const hideEditPostHandler = () => {
    setEditPost(false);
  };

  const toggleShowFullText = () => {
    postHeightHandler();
    overflowTextHandler();
  };

  const postHeightHandler = () => {
    setPostHeight((prevState) => {
      if (prevState === 'h-48') return 'h-auto';
      return 'h-48';
    });
  };

  const overflowTextHandler = () => {
    setOverflowText((prevState) => {
      if (prevState === '') return 'h-32 overflow-hidden';
      return '';
    });
  };

  return (
    <div
      className={
        'p-2 rounded-lg shadow-md w-64 col-span-1 ' +
        colorCls() +
        ' ' +
        postHeight
      }
    >
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-medium">{props.title}</h1>
        </div>
        <div>
          <Btn
            onClick={editPostHandler}
            className="p-0 text-xs text-gray-500 rounded-full shadow-none hover:text-gray-600"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
          </Btn>
          <Btn
            onClick={props.deletePost}
            className="p-0 text-xs text-gray-500 rounded-full shadow-none hover:text-gray-600"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </Btn>
        </div>
      </div>
      <div className={overflowText} onClick={toggleShowFullText}>
        <p className="break-words">{props.content}</p>
      </div>

      {editPost ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20">
          <div className="flex items-center justify-center h-screen">
            <PostForm hideForm={hideEditPostHandler} post={props.post} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Post;
