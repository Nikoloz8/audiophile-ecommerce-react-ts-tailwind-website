import tailwind from "../../styles/tailwind"
import type { TOutlet } from "../../types"

export default function SectionThree({ isMobile, isTablet }: TOutlet) {

    const { H2, P } = tailwind()


    return (
        <div className="flex justify-between max-xl:gap-[32px] max-lg:gap-[64px] max-lg:flex-col-reverse w-[100%] items-center">
            <div className="flex max-w-[450px] flex-col gap-[32px] max-lg:max-w-[90%]! max-lg:text-center">
                <h2 className={`${H2}`}>
                    BRINGING YOU THE <span className="text-[rgba(216,125,74,1)] ">BEST</span> AUDIO GEAR
                </h2>
                <p className={`text-[rgba(0,0,0,0.5)]! max-lg:text-center ${P}`}>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
            <img src={!isTablet && !isMobile ? `/images/shared/desktop/image-best-gear.jpg` : isTablet ? "/images/shared/tablet/image-best-gear.jpg" : isMobile ? "/images/shared/mobile/image-best-gear.jpg" : ""} className="rounded-[8px] max-lg:w-[100%] max-xl:w-[500px] " alt="" />
        </div >)
}
