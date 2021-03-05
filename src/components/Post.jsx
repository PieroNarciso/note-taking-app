import React from 'react';

import Btn from './Base/Btn';

const Post = (props) => {
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

  return (
    <div
      className={'h-48 p-2 rounded-lg shadow-md w-64 col-span-1 ' + colorCls()}
    >
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-medium">{props.title}</h1>
        </div>
        <div>
          <Btn onClick={props.deletePost} className="p-1 text-xs text-gray-500 rounded-full shadow-none hover:text-gray-600">
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
      <p className="mt-2">{props.content}</p>
    </div>
  );
};

export default Post;
