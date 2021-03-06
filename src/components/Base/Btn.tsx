import React from 'react';

interface Props {
  className: string;
  onClick: (event: React.FormEvent | React.ChangeEvent<HTMLButtonElement>) => void;
}

const Btn: React.FC<Props> = (props) => {
  const { children, className, ...btnAttrs } = { ...props };
  return (
    <button
      className={
        'text-sm text-white uppercase tracking-wide font-medium shadow-md rounded-md px-3 py-2 focus:outline-none hover:bg-opacity-70 hover:border-opacity-70 ' +
        className
      }
      {...btnAttrs}
    >
      {children}
    </button>
  );
};

export default Btn;
