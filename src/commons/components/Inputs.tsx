import React from 'react';

type InputsProps = {
  inputsTitle: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | undefined) => void;
  className: string;
};
export const Inputs = ({ inputsTitle, value, onChange, className }: InputsProps) => {
  console.log(value);

  // TODO: 汎用性のあるものに書き換える(react-hook-form使うまでの暫定)
  return (
    <div className="flex flex-col">
      <p className="login-headline-s">{inputsTitle}</p>
      <input value={value} className={className} onChange={onChange} />
    </div>
  );
};