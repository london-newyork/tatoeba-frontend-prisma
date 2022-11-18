import React from 'react';
import { SVGIcons } from '../SVGIcons';
import { OnClick } from '../types/types';

export const EditIconBtn = ({ onClick }: OnClick) => {
  return (
    <button className="edit-icon-btn-wrapper" onClick={onClick}>
      <SVGIcons
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        strokeWidth={0.9}
        className="header-icon-size"
        name="header-edit"
      />
    </button>
  );
};
