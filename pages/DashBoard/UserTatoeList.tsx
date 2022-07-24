import React from 'react'
import {TatoeListLayouts} from '../../src/components/Layouts/DashBoard/TatoeListLayouts'
import {TatoeListWrapper} from '../../src/components/DashBoard/TatoeListWrapper'
import {TatoeList} from '../../src/components/DashBoard/TatoeList'
import Head from 'next/head'
import { userInfo } from '../../src/components/mock/userInfo'
import { DashBoardLayouts } from '../../src/components/Layouts/DashBoard/DashBoardLayouts'
import { Header } from '../../src/components/Header/Header'
const UserTatoeList = () => {
    return (
        <div>
            <Head>
            </Head>
            <Header />
            <DashBoardLayouts>
                <TatoeListLayouts>
                        <TatoeListWrapper>
                            <TatoeList userInfo={userInfo}/>
                        </TatoeListWrapper>
                    </TatoeListLayouts>
            </DashBoardLayouts>
        </div>
    )
}

export default UserTatoeList