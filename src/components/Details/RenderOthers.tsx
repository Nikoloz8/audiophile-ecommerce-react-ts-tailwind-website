import tailwind from "../../styles/tailwind"
import data from "../../data.json"
import { useOutletContext, useParams } from "react-router-dom"
import type { TOutlet } from "../../types"

export default function RenderOthers() {

    const { H3, H5, ButtonStyle } = tailwind()
    const { id } = useParams()
    const filteredData = data.find((e) => e.id === Number(id))
    const {isMobile, isTablet} = useOutletContext<TOutlet>()

    return (
        <section className="flex flex-col gap-[64px] mt-[160px]">
            <h3 className={`${H3} text-center`}>YOU MAY ALSO LIKE</h3>
            <div className="flex justify-between w-[100%] max-md:flex-col max-md:gap-[56px] gap-[11px]">
                {filteredData?.others.map((e, i) => {
                    return <div key={i} className="flex flex-col gap-[40px]">
                        <img src={!isTablet && !isMobile ? e.image.desktop : isTablet ? e.image.tablet : isMobile ? e.image.mobile : ""} className="w-[350px]" alt="" />
                        <div className="flex flex-col gap-[32px] items-center">
                            <h5 className={`${H5} text-center`}>{e.name}</h5>
                            <button className={`${ButtonStyle}`}>
                                SEE PRODUCT
                            </button>
                        </div>
                    </div>
                })}
            </div>
        </section>)
}
