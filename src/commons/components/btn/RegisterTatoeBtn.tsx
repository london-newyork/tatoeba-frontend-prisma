import React from 'react';
import { SVGIcons } from '../SVGIcons';

const btnColor = {
  create: 'bg-black text-white',
  update: 'bg-black text-white',
  cancel: 'bg-white text-black border-gray-800 border'
} as const;

const btnIcon = {
  create: 'text-white',
  update: 'text-white',
  cancel: 'text-black'
} as const;

const btnType = {
  submit: 'submit',
  button: 'button'
};

type BtnCommonProps = {
  btnName: Required<string>;
  btnType: Required<BtnType>;
};

type BtnType = keyof typeof btnType;

type Props =
  | { variant: 'create'; onClickCancel?: never }
  | { variant: 'update'; onClickCancel?: never }
  | { variant: 'cancel'; onClickCancel: () => void };

export const RegisterTatoeBtn = (props: Required<BtnCommonProps> & Props) => {
  return (
    <div className="group flex justify-end">
      <button
        type="submit"
        className={`btn-m-color ${btnColor[props.variant]}`}
        onClick={props.onClickCancel ? props?.onClickCancel : null}
      >
        {props.btnName}
      </button>
      <div
        className="
        position
        relative
        "
      >
        <SVGIcons
          d="M9 5l7 7-7 7"
          strokeWidth={1}
          className={`btn-m-icon-base arrow-icon-s absolute ${btnIcon[props.variant]}`}
          name="arrow"
        />
      </div>
    </div>
  );
};
