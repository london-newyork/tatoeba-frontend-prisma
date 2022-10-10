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
  type: Required<BtnType>;
  btnColor: BtnColor;
};

type BtnType = keyof typeof btnType;

type UpdateTatoeBtnProps = {
  // btnName: Required<string>;
  // type: Required<BtnType>;
  // btnColor: BtnColor;
  tId?: string;
  tatoe?: Tatoe[];
  createdAt?: string;
  updatedAt?: string;
  title?: string;
  shortParaphrase?: string;
  description?: string;
};

type CancelTatoeBtnProps = {
  // btnName: Required<string>;
  // type: Required<BtnType>;
  // btnColor: BtnColor;
  tId?: string;
  tatoe?: Tatoe[];
  onClickCancel?: () => void;
};

type Props =
  | { common?: BtnCommonProps; create?: null; update?: never; cancel?: never }
  | {
      common?: BtnCommonProps;
      create?: never;
      update?: BtnCommonProps & UpdateTatoeBtnProps;
      cancel?: never;
    }
  | {
      common?: BtnCommonProps;
      create?: never;
      update?: never;
      cancel?: BtnCommonProps & CancelTatoeBtnProps;
    };

export const RegisterTatoeBtn = ({ cancel, common, create, update }: Props) => {
  return (
    <div className='flex justify-end group'>
      <button
        type='submit'
        className={`btn-m-color ${common ? common.btnColor : null}`}
        onClick={cancel ? cancel.onClickCancel : null}
      >
        {common ? common.btnName : null}
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
