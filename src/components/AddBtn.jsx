import React from "react";

const AddBtn = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={
        "fixed flex items-center justify-center w-12 h-12 font-mono text-4xl font-medium text-white bg-yellow-600 rounded-full shadow-lg transform transition hover:scale-110 ease-in-out hover:bg-yellow-700 right-4 bottom-2 focus:outline-none " +
        props.className
      }
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        ></path>
      </svg>
    </button>
  );
};

export default AddBtn;
