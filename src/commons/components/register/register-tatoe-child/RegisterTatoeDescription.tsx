import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FormProps } from '@Types/types';

export const RegisterTatoeDescription = ({ register, errors }: FormProps) => {
  return (
    <div
      className="
        flex
        flex-col
        justify-between
        lg:flex-row"
    >
      <label
        className="
        headline-s
        "
        htmlFor="description"
      >
        詳しい説明
        <br />
        <span className="caption-s">400文字以内</span>
        <ErrorMessage
          errors={errors}
          name="description"
          render={({ message }) => (message ? <p className="error-message">{message}</p> : null)}
        />
      </label>
      <textarea
        placeholder="WEBサイトを「家」とすると、サーバーは「土地」に例えられます。"
        rows={8}
        className="input-area"
        {...register('description', {
          required: true,
          pattern: {
            value: /^[ぁ-んァ-ヶー一-龠 a-zA-Z ]+$/,
            message: '全角漢字ひらがなまたは半角アルファベットでご入力ください。'
          },
          maxLength: {
            value: 400,
            message: '最大400文字までご入力が可能です。'
          }
        })}
      ></textarea>
    </div>
  );
};
