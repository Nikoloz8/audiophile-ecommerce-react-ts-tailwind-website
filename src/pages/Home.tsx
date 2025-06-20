import SectionOne from "../components/Home/SectionOne"
import CategorysSection from "../components/Home/CategorysSection"
import SectionTwo from "../components/Home/SectionTwo"
import { useOutletContext } from "react-router-dom"
import type { TOutlet } from "../types"

export default function Home() {

    const { isMobile, isTablet } = useOutletContext<TOutlet>()

    return (
        <>
            <div className="flex flex-col items-center w-[100%] pb-[158px] bg-center bg-cover bg-no-repeat mt-[-90px]! pt-[90px]" style={{ backgroundImage: `url('${!isTablet && !isMobile ? `/images/home/desktop/image-hero.jpg` : isTablet ? "/images/home/tablet/image-header.jpg" : isMobile ? "/images/home/mobile/image-header.jpg" : ""}')` }}>
                <div className="w-[1110px] max-lg:items-center! p-[0_39px] max-sm:p-[0_24px] max-xl:w-[100%]! flex flex-col gap-[128px] mt-[128px]">
                    <SectionOne />
                </div>
            </div>
            <div className="w-[1110px] max-sm:mt-[110px] max-xl:w-[100%] max-xl:p-[0_39px] max-sm:p-[0_24px] flex flex-col mt-[120px]">
                <div className="mb-[168px]! mt-[70px]">
                    <CategorysSection />
                </div>
                <SectionTwo />
            </div>
        </>
    )
}
