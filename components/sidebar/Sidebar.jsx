import React from 'react'
import Wrapper from './Wrapper'
import Toggle from './Toggle'
import Recommended, { RecommendedSkeleton } from '../Recommended'
import { getRecommendations } from '@/services/recommendedService'

export const SidebarSkeleton = () => {
    return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full border-r border-[#441456] bg-[#441456] z-50">
            <RecommendedSkeleton />
        </aside>
    )
}

const Sidebar = async () => {
    const recommended = await getRecommendations();

    return (
        <Wrapper>
            <Toggle />
            <div className="space-y-4 pt-4 lg:pt-0">
                <Recommended data={recommended} />
            </div>
        </Wrapper>
    )
}
export default Sidebar
