import { useNavigate, useParams } from "react-router-dom";
import RenderDevices from "../components/Category/RenderDevices";
import Header from "../components/Home/Header";
import tailwind from "../styles/tailwind";
import data from "../data.json"
import CategorysSection from "../components/Home/CategorysSection";
import SectionThree from "../components/Home/SectionThree";
import Footer from "../components/Home/Footer";

export default function Details() {

    const navigate = useNavigate()

    const getPreviousPath = () => {
        return localStorage.getItem("previousPath")

    }

    const { id } = useParams()
    const filteredData = data.find((e) => e.id === Number(id))

    const { P, H3, H5, ButtonStyle } = tailwind()

    return (
        <div className="w-[100%] bg-[rgba(250,250,250,1)] flex-col flex items-center">
            <div className="flex flex-col items-center w-[100%] bg-[rgba(0,0,0,1)]">
                <div className="w-[1110px] flex flex-col">
                    <Header />
                </div>
            </div>
            <div className="w-[1110px] flex flex-col">
                <div className="flex flex-col gap-[56px] mt-[80px]">
                    <a href="" onClick={() => navigate(`${getPreviousPath()}`)} className={`cursor-pointer ${P} text-[rgba(0,0,0,0.5)]!`}>Go Back</a>
                    <RenderDevices />
                </div>
                <div className="mt-[160px] flex justify-between">
                    <div className="flex flex-col gap-[32px] max-w-[640px]">
                        <h3 className={`${H3}`}>FEATURES</h3>
                        <p className={`${P} text-[rgba(0,0,0,0.5)]!`}>{filteredData?.features}</p>
                    </div>
                    <div className="flex flex-col gap-[32px]">
                        <h3 className={`${H3}`}>IN THE BOX</h3>
                        <ul>
                            {filteredData?.includes.map((e, i) => {
                                return <li key={i} className={`${P} flex gap-[24px] text-[rgba(0,0,0,0.5)]!`}>
                                    <span className="text-[rgba(216,125,74,1)]! font-[700]!">{e.quantity}x</span>
                                    {e.item}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex gap-[30px] mt-[160px]">
                    <div className="flex flex-col gap-[30px]">
                        <img src={filteredData?.gallery.first.desktop} className="rounded-[8px]" alt="" />
                        <img src={filteredData?.gallery.second.desktop} className="rounded-[8px]" alt="" />
                    </div>
                    <img src={filteredData?.gallery.third.desktop} className="rounded-[8px]" alt="" />
                </div>
                <div className="flex flex-col gap-[64px] mt-[160px]">
                    <h3 className={`${H3} text-center`}>YOU MAY ALSO LIKE</h3>
                    <div className="flex justify-between w-[100%]">
                        {filteredData?.others.map((e, i) => {
                            return <div key={i} className="flex flex-col gap-[40px]">
                                <img src={e.image.desktop} className="w-[350px]" alt="" />
                                <div className="flex flex-col gap-[32px] items-center">
                                    <h5 className={`${H5} text-center`}>{e.name}</h5>
                                    <button className={`${ButtonStyle}`}>
                                        SEE PRODUCT
                                    </button>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="mt-[240px]">
                    <CategorysSection />
                </div>
                <div className="mt-[160px]">
                    <SectionThree />
                </div>
            </div>
                <Footer />
        </div>
    )
}
