import React from "react";

const Btn = (props) => {
  const { children, className,...btnAttrs } = { ...props };
  return (
    <button className={"text-sm text-white uppercase tracking-wide font-medium rounded-md px-3 py-2 focus:outline-none " + className} {...btnAttrs}>
      {children}
    </button>
  );
};

export default Btn;
