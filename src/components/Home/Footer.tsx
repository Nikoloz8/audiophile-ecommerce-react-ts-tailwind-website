import tailwind from "../../styles/tailwind"
import HeaderPart from "./HeaderPart"

export default function Footer() {

    const { P } = tailwind()

    return (
        <footer className="w-[100%] bg-[rgba(16,16,16,1)] flex justify-center mt-[200px] pb-[32px]">
            <div className="w-[1110px] flex flex-col">
                <span className="w-[101px] h-[4px] bg-[rgba(216,125,74,1)] mb-[75px]"></span>
                <div className="flex justify-between items-center">
                    <HeaderPart />
                </div>
                <div className="flex justify-between items-end mt-[36px]">
                    <p className={`max-w-[540px] ${P} text-[rgba(255,255,255,0.5)]`}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <nav className="flex gap-[16px]">
                        <img src="/images/shared/desktop/icon-facebook.svg" alt="" />
                        <img src="/images/shared/desktop/icon-twitter.svg" alt="" />
                        <img src="/images/shared/desktop/icon-instagram.svg" alt="" />
                    </nav>
                </div>
                <h5 className={`${P} font-[700] text-[rgba(255,255,255,0.5)] mt-[48px]`}>Copyright 2021. All Rights Reserved</h5>
            </div>
        </footer>)
}
