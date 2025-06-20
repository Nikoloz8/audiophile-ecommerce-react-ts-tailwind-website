import tailwind from "../../styles/tailwind"
import HeaderPart from "./HeaderPart"

export default function Footer() {

    const { P } = tailwind()
    const socials = ["facebook", "twitter", "instagram"]

    return (
        <footer className="w-[100%] bg-[rgba(16,16,16,1)] max-xl:mt-[96px] flex justify-center mt-[200px] pb-[32px]">
            <div className="w-[1110px] max-xl:w-[100%] max-xl:p-[0_39px] max-sm:p-[0_24px] flex flex-col max-sm:items-center">
                <span className="w-[101px] h-[4px] bg-[rgba(216,125,74,1)] mb-[75px] max-sm:mb-[48px]"></span>
                <div className="flex justify-between items-center max-xl:flex-col max-xl:items-start max-xl:gap-[32px] max-sm:items-center">
                    <HeaderPart isFooter={true}/>
                </div>
                <div className="flex justify-between items-end mt-[36px] max-sm:flex-col max-sm:items-center max-sm:gap-[48px]">
                    <p className={`max-w-[540px] ${P} text-[rgba(255,255,255,0.5)] max-sm:text-center`}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <nav className="flex gap-[16px]">
                        {socials.map((e, i) => {
                            return <img key={i} src={`/images/shared/desktop/icon-${e}.svg`} className="cursor-pointer" alt="" />
                        })}
                    </nav>
                </div>
                <h5 className={`${P} font-[700] text-[rgba(255,255,255,0.5)] mt-[48px]`}>Copyright 2021. All Rights Reserved</h5>
            </div>
        </footer>)
}
