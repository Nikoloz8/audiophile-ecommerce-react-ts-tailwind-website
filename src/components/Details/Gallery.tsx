import data from "../../data.json"
import { useOutletContext, useParams } from "react-router-dom"
import type { TOutlet } from "../../types"

export default function Gallery() {

    const { id } = useParams()
    const filteredData = data.find((e) => e.id === Number(id))

    const { isMobile, isTablet } = useOutletContext<TOutlet>()
    return (
        <div className="flex gap-[30px] h-[592px] max-md:flex-col max-md:w-[100%] max-md:h-[auto]! max-lg:h-[368px]! mt-[160px]">
            <div className="flex flex-col gap-[30px] max-lg:gap-[20px]">
                <img src={!isTablet && !isMobile ? filteredData?.gallery.first.desktop : isTablet ? filteredData?.gallery.first.tablet : isMobile ? filteredData?.gallery.first.mobile : ""} className="rounded-[8px] w-[100%] h-[47.5%] max-md:w-[100%]" alt="" />
                <img src={!isTablet && !isMobile ? filteredData?.gallery.second.desktop : isTablet ? filteredData?.gallery.second.tablet : isMobile ? filteredData?.gallery.second.mobile : ""} className="rounded-[8px] w-[100%] h-[47.5%] max-md:w-[100%]" alt="" />
            </div>
            <img src={!isTablet && !isMobile ? filteredData?.gallery.third.desktop : isTablet ? filteredData?.gallery.third.tablet : isMobile ? filteredData?.gallery.third.mobile : ""} className="rounded-[8px] max-lg:w-[395px] h-[100%]! max-md:w-[100%]" alt="" />
        </div>)
}
