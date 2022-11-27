import React from 'react';

type AuthInputsProps = {
  inputsTitle: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | undefined) => void;
};
export const AuthInputs = ({
  inputsTitle,
  value,
  onChange,
}: AuthInputsProps) => {
  console.log(value);

  return (
    <div className="flex flex-col">
      <p className="login-headline-s">{inputsTitle}</p>
      <input
        value={value}
        className="login-input login-input-cstm"
        onChange={onChange}
      />
    </div>
  );
};
