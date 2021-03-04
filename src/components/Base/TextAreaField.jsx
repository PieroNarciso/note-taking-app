import React from "react";

const TextAreaField = ({ value, onChange, placeholder, children }) => {
  return (
    <div>
      <textarea
        className="px-2 py-2 overflow-auto bg-gray-300 rounded-lg resize-none focus:outline-none ring-2 ring-transparent focus:ring-blue-500"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        cols="30"
        rows="10"
      >
        {children}
      </textarea>
    </div>
  );
};

export default TextAreaField;
