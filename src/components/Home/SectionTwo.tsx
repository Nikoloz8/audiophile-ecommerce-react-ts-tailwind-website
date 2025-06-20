import { useNavigate, useOutletContext } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import type { TOutlet } from "../../types"

export default function SectionTwo() {

    const { H1, P, ButtonStyle, H4 } = tailwind()
    const navigate = useNavigate()
    const { isTablet, isMobile } = useOutletContext<TOutlet>()

    return (
        <div className="flex flex-col gap-[48px] mb-[200px] max-sm:mb-[120px]">
            <div className="w-[100%] relative rounded-[8px] max-sm:p-[294px_24px_55px_24px] overflow-hidden p-[133px_95px_124px_95px] bg-[rgba(216,125,74,1)]! max-xl:p-[353px_169px_64px_171px] max-xl:justify-center flex justify-end">
                <img src={!isTablet && !isMobile ? `/images/home/desktop/image-speaker-zx9.png` : isTablet ? "/images/home/tablet/image-speaker-zx9.png" : isMobile ? "/images/home/desktop/image-speaker-zx9.png" : ""} className="w-[410px] z-10 max-sm:w-[172px]! max-xl:top-[150px] max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:-translate-y-1/2 absolute left-[120px] top-[75px] max-xl:w-[197px]" alt="" />
                <img src="/images/home/desktop/pattern-circles.svg" className="absolute top-[-30px] left-[-150px] max-xl:top-[150px] max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:-translate-y-1/2" alt="" />
                <div className="flex flex-col max-xl:items-center gap-[40px] max-w-[350px] max-xl:w-[100%]!  items-start">
                    <div className="flex flex-col gap-[24px] max-xl:items-center w-[100%]">
                        <h1 className={`${H1} text-[#FFFFFF]! max-xl:text-center`}>ZX9
                            SPEAKER</h1>
                        <p className={`${P} max-xl:text-center text-[rgba(255,255,255,0.75)]! `}>
                            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                        </p>
                    </div>
                    <button onClick={() => navigate("/details/speakers/6")} className={`${ButtonStyle} bg-[#000000]! hover:bg-[rgba(76,76,76,1)]! z-10 text-[#FFFFFF]!`}>
                        SEE PRODUCT
                    </button>
                </div>
            </div>
                <div className="w-[100%] z-10 max-sm:p-[101px_24px] rounded-[8px] bg-center bg-cover bg-no-repeat p-[101px_95px]" style={{ backgroundImage: `url('${!isTablet && !isMobile ? `/images/home/desktop/image-speaker-zx7.jpg` : isTablet ? "/images/home/tablet/image-speaker-zx7.jpg" : isMobile ? "/images/home/mobile/image-speaker-zx7.jpg" : ""}')` }} >
                <div className="flex flex-col gap-[32px] items-start">
                    <h4 className={`${H4}`}>ZX7 SPEAKER</h4>
                    <button onClick={() => navigate("/details/speakers/5")} className={`${ButtonStyle} hover:bg-[rgba(0,0,0,1)]! hover:text-[#FFFFFF]! bg-transparent! border-[1px] border-solid border-[#000000] text-[#000000]!`}>SEE PRODUCT</button>
                </div>
            </div>
            <div className="flex justify-between max-sm:gap-[24px] max-sm:flex-col max-sm:items-center max-sm:w-[100%]">
                <img src={!isTablet && !isMobile ? `/images/home/desktop/image-earphones-yx1.jpg` : isTablet ? "/images/home/tablet/image-earphones-yx1.jpg" : isMobile ? "/images/home/mobile/image-earphones-yx1.jpg" : ""} className="rounded-[8px] max-sm:w-[100%]! max-xl:w-[48.5%]! w-[540px]" alt="" />
                <div className="w-[540px] max-sm:w-[100%]! p-[101px_95px] max-sm:p-[41px_24px] max-xl:p-[101px_41px] max-xl:w-[48.5%]! flex flex-col gap-[32px] items-start bg-[rgba(241,241,241,1)] rounded-[8px]">
                    <h4 className={`${H4}`}>YX1 EARPHONES</h4>
                    <button onClick={() => navigate("/details/earphones/1")} className={`${ButtonStyle} hover:bg-[rgba(0,0,0,1)]! hover:text-[#FFFFFF]! bg-transparent! border-[1px] border-solid border-[#000000] text-[#000000]!`}>SEE PRODUCT</button>
                </div>
            </div>
        </div>)
}
