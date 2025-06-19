import tailwind from "../../styles/tailwind"

export default function SectionThree() {

    const { H2, P } = tailwind()

    return (
        <div className="flex justify-between w-[100%] items-center">
            <div className="flex max-w-[450px] flex-col gap-[32px]">
                <h2 className={`${H2}`}>
                    BRINGING YOU THE <span className="text-[rgba(216,125,74,1)]">BEST</span> AUDIO GEAR
                </h2>
                <p className={`text-[rgba(0,0,0,0.5)]! ${P}`}>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
            <img src="/images/shared/desktop/image-best-gear.jpg" className="rounded-[8px]" alt="" />
        </div>)
}
