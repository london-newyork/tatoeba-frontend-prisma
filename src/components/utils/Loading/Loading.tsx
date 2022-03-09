import React from 'react'

export const Loading = () => {
    console.log('Loading中');

  return (
    <div>
        <div className="flex justify-center">
            <div className="animate-ping h-4 w-4 bg-blue-600 rounded-full"></div>
        </div>
    </div>
  )
}
