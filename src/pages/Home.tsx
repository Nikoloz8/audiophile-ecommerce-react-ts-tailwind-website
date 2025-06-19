import HeaderPart from "../components/Home/HeaderPart"
import SectionOne from "../components/Home/SectionOne"
import CategorysSection from "../components/Home/CategorysSection"
import SectionTwo from "../components/Home/SectionTwo"
import Footer from "../components/Home/Footer"

export default function Home() {

    return (
        <>
            <div className="w-[100%] bg-[rgba(250,250,250,1)] flex-col flex items-center">
                <div className="flex flex-col items-center w-[100%] pb-[158px] bg-center bg-cover bg-no-repeat bg-[url('/images/home/desktop/image-hero.jpg')]">
                    <div className="w-[1110px] flex flex-col gap-[128px]">
                        <HeaderPart />
                        <SectionOne />
                    </div>
                </div>
                <div className="w-[1110px] flex flex-col mt-[120px]">
                    <CategorysSection />
                    <SectionTwo />
                </div>
                <Footer />
            </div >
        </>
    )
}
