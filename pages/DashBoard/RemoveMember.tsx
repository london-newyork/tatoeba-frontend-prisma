import React from 'react'
import { DashBoardLayouts } from "../../src/components/Layouts/DashBoard/DashBoardLayouts"
import { Header } from '../../src/components/Header/Header'
import { RemoveMemberLayouts } from '../../src/components/Layouts/DashBoard/RemoveMemberLayouts'

const RemoveMember = () => {
  return (
    <div>
        <Header />
        <DashBoardLayouts>
            <RemoveMemberLayouts>
                    <h1 className='text-3xl tracking-widest text-gray-700'>退会</h1>
                    <p className='text-sm leading-loose mt-10 text-gray-700'>
                        ご利用いただきありがとうございました。<br />
                    </p>
                    <button
                    className='
                    h-10
                    w-40
                    bg-red-400
                    rounded-md
                    text-white
                    mt-10'
                    // onClick={}
                    >
                        退会する
                    </button>
            </RemoveMemberLayouts>
        </DashBoardLayouts>
    </div>
  )
}

export default RemoveMember
