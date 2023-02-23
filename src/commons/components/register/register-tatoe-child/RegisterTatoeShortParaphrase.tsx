import { FormProps } from '@Types/types';
import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

export const RegisterTatoeShortParaphrase = ({ /* shortParaphrase, */ register, errors }: FormProps) => {
  return (
    <div
      className="
        flex
        flex-col
        justify-between
        lg:flex-row
        "
    >
      <label
        className="
        headline-s"
        htmlFor="shortParaphrase"
      >
        短く例えると
        <br />
        <span className="caption-s">50文字以内</span>
        <ErrorMessage
          errors={errors}
          name="shortParaphrase"
          render={({ message }) => (message ? <p className="error-message">{message}</p> : null)}
        />
      </label>
      <input
        placeholder="土地"
        type="text"
        className="input-area"
        // value={shortParaphrase}
        {...register('shortParaphrase', {
          required: true,
          pattern: {
            value: /^[ぁ-んァ-ヶー一-龠 a-zA-Z ]+$/,
            message: '全角漢字ひらがなまたは半角アルファベットでご入力ください。'
          },
          maxLength: {
            value: 50,
            message: '最大50文字までご入力が可能です。'
          }
        })}
      ></input>
    </div>
  );
};
