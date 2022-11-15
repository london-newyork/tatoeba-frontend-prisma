import React from 'react';
import { Tatoe } from '../types/types';

const btnColor = {
  create: 'bg-black text-white',
  update: 'bg-black text-white',
  cancel: 'bg-white text-black border-gray-800 border',
} as const;

const btnIcon = {
  create: 'text-white',
  update: 'text-white',
  cancel: 'text-black',
} as const;

const btnType = {
  submit: 'submit',
  button: 'button',
};

type BtnCommonProps = {
  btnName: Required<string>;
  btnType: Required<BtnType>;
};

type BtnType = keyof typeof btnType;

type Props =
  | { variant: 'create'; onClickCancel?: never }
  | {
      variant: 'update';
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
      variant: 'cancel';
      tId: string | string[];
      tatoe: Tatoe[];
      onClickCancel: () => void;
    };

export const RegisterTatoeBtn = (props: Required<BtnCommonProps> & Props) => {
  return (
    <div className='flex justify-end group'>
      <button
        type='submit'
        className={`btn-m-color ${btnColor[props.variant]}`}
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
          className={`absolute
          material-symbols-outlined
          btn-m-icon-base ${btnIcon[props.variant]}`}
        >
          chevron_right
        </span>
      </div>
    </div>
  );
};
