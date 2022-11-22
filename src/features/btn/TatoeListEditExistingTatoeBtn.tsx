import React from 'react';
import { useHandleMoveToEdit } from '../dashboard/components/hooks/handleMoveToEdit';
import { SVGIcons } from '../../commons/components/SVGIcons';
import { Tatoe } from '../../types/types';

export const TatoeListEditExistingTatoeBtn = ({
  tId,
  title,
  shortParaphrase,
  description,
  imageId,
  imageUrl
}: Tatoe) => {
  const { handleMoveToEdit } = useHandleMoveToEdit({
    tId,
    title,
    shortParaphrase,
    description,
    imageId,
    imageUrl
  });

  return (
    <ul>
      <li
        className="
            flex
            items-center
            "
      >
        <button onClick={handleMoveToEdit}>
          <SVGIcons
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            strokeWidth={0.9}
            className="tatoe-list-icon"
            name="tatoe-list-update"
          />
        </button>
      </li>
    </ul>
  );
};
