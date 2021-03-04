import React from "react";

const TextField = ({ placeholder, value, onChange, label }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{label}</label>
      <input
        type="text"
        className="px-2 py-2 bg-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 ring-2 ring-transparent focus:bg-gray-200"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
