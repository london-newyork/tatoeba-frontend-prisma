import { VFC } from "react"
import { MenuBtn } from "../../btn/MenuBtn"
import { UserTatoeListBtn } from "../../btn/UserTatoeListBtn"
import { DashBoardUserHome } from "../../DashBoard/DashBoardUserHome"

export const SideBarMainContentsLayouts:VFC = (props) => {
    return (
            <div
            className='
            fixed
            left-5
            top-1/3
            '
            >
                <div
                className="
                flex
                flex-col
                gap-y-12
                "
                >
                    <DashBoardUserHome />
                    <UserTatoeListBtn />
                </div>
            </div>
  )
}