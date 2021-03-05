import React from "react";

const Btn = (props) => {
  const { children, className, ...btnAttrs } = { ...props };
  return (
    <button
      className={
        "text-sm text-white uppercase tracking-wide font-medium shadow-md rounded-md px-3 py-2 focus:outline-none hover:bg-opacity-70 hover:border-opacity-70 " +
        className
      }
      {...btnAttrs}
    >
      {children}
    </button>
  );
};

export default Btn;
