import React from 'react';
import { Tatoe } from '../types/types';

const btnColor = {
  black: 'bg-black text-white',
  white: 'bg-white text-black',
} as const;

type BtnColor = keyof typeof btnColor;

const btnType = {
  submit: 'submit',
  button: 'button',
};

type BtnCommonProps = {
  btnName: Required<string>;
  btnType: Required<BtnType>;
  btnColor: Required<BtnColor>;
};

type BtnType = keyof typeof btnType;

type Props =
  | { role: 'create'; onClickCancel?: never }
  | {
      role: 'update';
      tId: string[] | string;
      tatoe: Tatoe[];
      createdAt: string;
      updatedAt: string;
      title: string | null;
      shortParaphrase: string | null;
      description: string | null;
      onClickCancel?: never;
    }
  | {
      role: 'cancel';
      tId: string | string[];
      tatoe: Tatoe[];
      onClickCancel: () => void;
    };

export const RegisterTatoeBtn = (props: Required<BtnCommonProps> & Props) => {
  return (
    <div className='flex justify-end group'>
      <button
        type='submit'
        className={`btn-m-color ${props.btnColor}`}
        onClick={props.onClickCancel ? props?.onClickCancel : null}
      >
        {props.btnName}
      </button>
      <div
        className='
  position
  relative
  '
      >
        <span
          className='
      absolute
      material-symbols-outlined
      btn-m-icon-white
      '
        >
          chevron_right
        </span>
      </div>
    </div>
  );
};
