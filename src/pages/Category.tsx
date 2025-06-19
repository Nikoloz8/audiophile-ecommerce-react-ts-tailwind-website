import tailwind from "../styles/tailwind"
import { useParams } from "react-router-dom"
import CategorysSection from "../components/Home/CategorysSection"
import RenderDevices from "../components/Category/RenderDevices"

export default function Category() {

    const { H2 } = tailwind()
    const { category } = useParams()

    return (
        <>
            <div className="flex flex-col items-center w-[100%] pt-[90px] mt-[-90px] bg-[rgba(0,0,0,1)]">
                <div className="w-[1110px] flex flex-col">
                    <h2 className={`m-[98px_0] text-center text-[#FFFFFF]! ${H2}`}>{category?.toUpperCase()}</h2>
                </div>
            </div>
            <div className="w-[1110px] flex flex-col gap-[160px] mt-[160px]">
                <RenderDevices />
                <div className="mt-[70px] mb-[160px]">
                    <CategorysSection />
                </div>
            </div>
        </>
    )
}
