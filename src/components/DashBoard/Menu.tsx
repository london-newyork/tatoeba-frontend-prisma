import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'

export const Menu = () => {
    const router = useRouter()
    const handleMoveToRemoveMember = () => {
        router.push({
            pathname:'/DashBoard/RemoveMember',
        })
    }
    const [isHover , setIsHover] = useState(true)
    const handleToolTip = useCallback(
      () => {
        setIsHover(!isHover)
      },
      [isHover],
    )

  return (
    <div>
        <nav className='h-10 w-12 bg-gray-300 z-20 absolute text-2xl text-gray-600 -left-2 rounded-r-md shadow-sm'>
            <button
            className='position'
            onClick={handleToolTip}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </button>
                <ul
                className={`
                absolute
                z-30
                left-0
                h-24
                w-48
                bg-white
                flex-col
                gap-y-3
                rounded-md
                shadow-sm
                pl-2
                ${isHover ? "hidden" : "flex"}
                `}
                >
                    <li
                    className='
                    text-sm
                    pt-6
                    text-gray-300
                    mx-auto'>
                        Menu
                    </li>
                    <li
                    className='
                    text-sm
                    mx-auto
                    cursor-pointer
                    '
                    onClick={handleMoveToRemoveMember}>
                        退会する
                    </li>
                </ul>
        </nav>
    </div>
  )
}
