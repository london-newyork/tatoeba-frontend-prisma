import React, { VFC } from 'react';
import { useRecoilState } from 'recoil';
import { Tatoe } from '../types/types';
import { TatoeAtom } from '../utils/atoms/TatoeAtom';

type DeleteProps = {
  tId: string;
};

export const DeleteWordsBtn: VFC<DeleteProps> = (props) => {
  const [tatoe, setTatoe] = useRecoilState<Tatoe[]>(TatoeAtom);

  const handleDeleteWords = () => {
    const deleteWords = tatoe.filter((item) => {
      return item.tId !== props.tId;
    });
    setTatoe(deleteWords);
    console.log('delete Tatoe');
  };
  // console.log("tatoeList tatoe : ",tatoe);
  return (
    <div>
      <li className='flex items-center'>
        <button onClick={handleDeleteWords}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </svg>
        </button>
      </li>
    </div>
  );
};
