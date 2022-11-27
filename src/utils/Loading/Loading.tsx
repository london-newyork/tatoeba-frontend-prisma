import React from 'react';

export const Loading = () => {
  console.log('Loading中');

  return (
    <div>
      <div className="flex justify-center">
        <div className="h-4 w-4 animate-ping rounded-full bg-blue-600"></div>
      </div>
    </div>
  );
};
