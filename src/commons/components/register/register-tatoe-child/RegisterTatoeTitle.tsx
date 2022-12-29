import React from 'react';
import { FieldErrorsImpl, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
// import { useFormContext } from 'react-hook-form';

/* type TitleProps = {
  title: string | undefined;
  setTitle: React.Dispatch<string>;
}; */

export type FormProps = {
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  isValid?: boolean;
  setValue?: UseFormSetValue<FieldValues>;
};

export const RegisterTatoeTitle = (/* props: TitleProps */ { register }: FormProps) => {
  // const { title, setTitle } = props;
  // const { register } = useFormContext();
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
      </label>
      <textarea
        // value={title}
        // name="title"
        // onChange={(e) => setTitle(e.target.value)}
        rows={2}
        placeholder="サーバー"
        maxLength={50}
        className="input-area"
        {...register('title')}
      ></textarea>
    </div>
    // <div
    //   className="
    //   flex
    //   flex-col
    //   justify-between
    //   lg:flex-row"
    // >
    //   <label
    //     className="
    //   headline-s
    //   "
    //     htmlFor="title"
    //   >
    //     わかりにくい専門用語・文章
    //     <br />
    //     <span className="caption-s">50文字以内</span>
    //   </label>
    //   <textarea
    //     value={title}
    //     name="title"
    //     onChange={(e) => setTitle(e.target.value)}
    //     rows={2}
    //     placeholder="サーバー"
    //     maxLength={50}
    //     className="input-area"
    //   ></textarea>
    // </div>
  );
};
