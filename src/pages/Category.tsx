import Header from "../components/Home/Header"
import tailwind from "../styles/tailwind"
import { useParams } from "react-router-dom"
import CategorysSection from "../components/Home/CategorysSection"
import SectionThree from "../components/Home/SectionThree"
import Footer from "../components/Home/Footer"
import RenderDevices from "../components/Category/RenderDevices"

export default function Category() {

    const { H2 } = tailwind()
    const { category } = useParams()

    return (
        <div className="w-[100%] bg-[rgba(250,250,250,1)] flex-col flex items-center">
            <div className="flex flex-col items-center w-[100%] bg-[rgba(0,0,0,1)]">
                <div className="w-[1110px] flex flex-col">
                    <Header />
                    <h2 className={`m-[98px_0] text-center text-[#FFFFFF]! ${H2}`}>{category?.toUpperCase()}</h2>
                </div>
            </div>
            <div className="w-[1110px] flex flex-col gap-[160px] mt-[160px]">
                <RenderDevices />
                <div className="mt-[70px]">
                    <CategorysSection />
                </div>
                <SectionThree />
            </div>
            <Footer />
        </div>

    )
}
