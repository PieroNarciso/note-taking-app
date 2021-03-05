import React from 'react';

const Post = (props) => {

  const colorCls = () => {
    switch (props.color) {
      case ('red'):
        return 'bg-red-300';
      case ('blue'):
        return 'bg-blue-300';
      case ('green'):
        return 'bg-green-300';
      default:
        return 'bg-white';
    }
  };
  
  return (
    <div className={"h-48 p-2 rounded-lg shadow-md w-64 col-span-1 " + colorCls()}>
      <h1 className="text-lg font-medium">{props.title}</h1>
      <p className="mt-2">
        {props.content}
      </p>
    </div>
  );
};

export default Post;
