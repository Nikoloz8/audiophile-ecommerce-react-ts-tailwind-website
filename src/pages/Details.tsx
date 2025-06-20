import { useParams } from "react-router-dom";
import RenderDevices from "../components/Category/RenderDevices";
import tailwind from "../styles/tailwind";
import data from "../data.json"
import CategorysSection from "../components/Home/CategorysSection";
import RenderIncludes from "../components/Details/RenderIncludes";
import Gallery from "../components/Details/Gallery";
import GoBackButton from "../components/Checkout/GoBackButton";

export default function Details() {

    const { id } = useParams()
    const filteredData = data.find((e) => e.id === Number(id))
    const { P, H3 } = tailwind()

    return (
        <>
            <div className="flex flex-col items-center w-[100%] mt-[-90px] pt-[90px] bg-[rgba(0,0,0,1)]">
            </div>
            <div className="w-[1110px] flex flex-col">
                <div className="flex flex-col gap-[56px] mt-[80px]">
                    <GoBackButton />
                    <RenderDevices />
                </div>
                <div className="mt-[160px] flex justify-between">
                    <div className="flex flex-col gap-[32px] max-w-[640px]">
                        <h3 className={`${H3}`}>FEATURES</h3>
                        <p className={`${P} text-[rgba(0,0,0,0.5)]!`}>{filteredData?.features}</p>
                    </div>
                    <RenderIncludes />
                </div>
                <Gallery />
                <div className="mt-[240px] mb-[160px]">
                    <CategorysSection />
                </div>
            </div>
        </>
    )
}
