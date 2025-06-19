import SectionOne from "../components/Home/SectionOne"
import CategorysSection from "../components/Home/CategorysSection"
import SectionTwo from "../components/Home/SectionTwo"

export default function Home() {

    return (
        <>
            <div className="flex flex-col items-center w-[100%] pb-[158px] bg-center bg-cover bg-no-repeat bg-[url('/images/home/desktop/image-hero.jpg')] mt-[-90px]! pt-[90px]">
                <div className="w-[1110px] flex flex-col gap-[128px] mt-[128px]">
                    <SectionOne />
                </div>
            </div>
            <div className="w-[1110px] flex flex-col mt-[120px]">
                <div className="mb-[168px]! mt-[70px]">
                    <CategorysSection />
                </div>
                <SectionTwo />
            </div>
        </>
    )
}
