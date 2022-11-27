import React, { useEffect, useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { useHandleMoveToResult } from '../../hooks/handleMoveToResult';
import { AllUserTatoe } from '../../../../../types/types';
import { ProfileImageAtom } from '../../../../../utils/atoms/ProfileImageAtom';
import { useGetUserTatoeApi } from '../../hooks/useGetUserTatoeApi';
import { CardChildContents } from './CardChildContents';

export const CardChild: VFC = () => {
  const RandomColors = [
    'hover:shadow-plane_2xl_card_prime',
    'hover:shadow-plane_2xl_card_second',
    'hover:shadow-plane_2xl_card_third',
    'hover:shadow-plane_2xl_card'
  ];

  const colors = RandomColors[Math.floor(Math.random() * RandomColors.length)];
  const shadowColor = colors.toString();

  const { getAllUserTatoe, allUserTatoe } = useGetUserTatoeApi();
  const { handleMoveToResult } = useHandleMoveToResult(allUserTatoe);

  const [isClient, setIsClient] = useState(false);

  const profileImage = useRecoilValue(ProfileImageAtom);

  useEffect(() => {
    const main = async () => {
      await getAllUserTatoe();
      setIsClient(true);
    };
    main();
  }, []);

  return (
    <>
      {allUserTatoe && isClient
        ? allUserTatoe.map((item: AllUserTatoe) => (
            <ul key={item.tId}>
              <li
                className={`
                    px-4
                    pt-4
                    h-[312px]
                    w-[280px]
                    rounded-2xl
                    shadow-plane_2xl_card
                    ${shadowColor}
                    border-[1px]
                    border-gray-800
                    bg-white
                    `}
                onClick={() =>
                  handleMoveToResult({
                    tId: item.tId,
                    title: item.title,
                    shortParaphrase: item.shortParaphrase,
                    description: item.description,
                    userId: item.userId
                  })
                }
              >
                <CardChildContents
                  userName={item.userName}
                  profileImage={profileImage}
                  userId={item.userId}
                  title={item.title}
                  shortParaphrase={item.shortParaphrase}
                  imageUrl={item.imageUrl}
                />
              </li>
            </ul>
          ))
        : undefined}
    </>
  );
};
