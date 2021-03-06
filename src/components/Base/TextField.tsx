import React from "react";

interface Props {
  placeholder: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<Props> = ({ placeholder, value, onChange, label }) => {
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
