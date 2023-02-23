import { FormProps } from '@Types/types';
import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

export const RegisterTatoeTitle = ({ /* title,  */ register, errors }: FormProps) => {
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
        htmlFor="title"
      >
        わかりにくい専門用語・文章
        <br />
        <span className="caption-s">50文字以内</span>
        <ErrorMessage
          errors={errors}
          name="title"
          render={({ message }) => (message ? <p className="error-message">{message}</p> : null)}
        />
      </label>
      <textarea
        rows={2}
        placeholder="サーバー"
        className="input-area"
        // value={title}
        {...register('title', {
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
      ></textarea>
    </div>
  );
};
