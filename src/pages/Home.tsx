import { useNavigate } from "react-router-dom"
import tailwind from "../styles/tailwind"

export default function Home() {

    const navHeader = ["home", "headphones", "speakers", "earphones"]
    const navCategorys = ["headphones", "speakers", "earphones"]
    const navigate = useNavigate()
    const { SubTitle, Overline, H1, P, H6, ButtonStyle, H4, H2 } = tailwind()

    return (
        <>
            <div className="w-[100%] bg-[rgba(250,250,250,1)] flex-col flex items-center">
                <div className="flex flex-col items-center w-[100%] pb-[158px] bg-center bg-cover bg-no-repeat bg-[url('/images/home/desktop/image-hero.jpg')]">
                    <div className="w-[1110px] flex flex-col gap-[128px]">
                        <header className="flex w-[100%] bg-transparent items-center p-[32px_0] justify-between border-b-[1px] border-solid border-[rgba(255,255,255,0.2)]">
                            <img src="/images/shared/desktop/logo.svg" alt="" />
                            <nav>
                                <ul className="flex gap-[32px]">
                                    {navHeader.map((e, i) => {
                                        return <li onClick={() => navigate(e)} className={`${SubTitle} tracking-[2px] text-[rgba(255,255,255,1)] cursor-pointer`} key={i}>{e.toUpperCase()}</li>
                                    })}
                                </ul>
                            </nav>
                            <img src="/images/shared/desktop/icon-cart.svg" alt="" />
                        </header>
                        <div className="flex flex-col gap-[40px] max-w-[400px] items-start">
                            <div className="flex flex-col gap-[24px]">
                                <h4 className={`${Overline} text-[rgba(255,255,255,0.5)]!`}>NEW PRODUCT</h4>
                                <h1 className={`${H1} text-[#FFFFFF]!`}>
                                    XX99 MARK II
                                    HEADPHONES
                                </h1>
                                <p className={`${P} text-[rgba(255,255,255,0.75)]! max-w-[350px]`}>
                                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                                </p>
                            </div>
                            <button className={`${ButtonStyle}`}>
                                SEE PRODUCT
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[1110px] flex flex-col mt-[120px]">
                    <div className="flex w-[100%] justify-between mb-[168px]">
                        {navCategorys.map((e, i) => {
                            return <div key={i} className="flex bg-[rgba(241,241,241,1)] rounded-[8px] flex-col items-center pb-[30px]! w-[350px] min-h-[220px] justify-end! relative cursor-pointer">
                                <img src={`/images/shared/desktop/image-category-thumbnail-${e}.png`} className={`absolute w-[250px] top-[-85px] ${e === "earphones" ? "top-[-70px]!" : ""}`} alt="" />
                                <div className="flex flex-col gap-[12px] items-center">
                                    <h6 className={`${H6}`}>{e.toUpperCase()}</h6>
                                    <a href="#" className={`flex items-center gap-[12px] ${SubTitle} text-[rgba(0,0,0,0.5)]!`}>
                                        SHOP
                                        <img src="/images/shared/desktop/icon-arrow-right.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="flex flex-col gap-[48px] mb-[200px]">
                        <div className="w-[100%] relative rounded-[8px] overflow-hidden p-[133px_95px_124px_95px] bg-[rgba(216,125,74,1)]! flex justify-end">
                            <img src="/images/home/desktop/pattern-circles.svg" className="absolute top-[-30px] left-[-150px]" alt="" />
                            <img src="/images/home/desktop/image-speaker-zx9.png" className="w-[410px] absolute left-[120px] top-[75px]" alt="" />
                            <div className="flex flex-col gap-[40px] max-w-[350px] items-start">
                                <div className="flex flex-col gap-[24px]">
                                    <h1 className={`${H1} text-[#FFFFFF]!`}>ZX9
                                        SPEAKER</h1>
                                    <p className={`${P} text-[rgba(255,255,255,0.75)]! `}>
                                        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                                    </p>
                                </div>
                                <button className={`${ButtonStyle} bg-[#000000]! text-[#FFFFFF]!`}>
                                    SEE PRODUCT
                                </button>
                            </div>
                        </div>
                        <div className="w-[100%] rounded-[8px] bg-[url('/images/home/desktop/image-speaker-zx7.jpg')] bg-center bg-cover bg-no-repeat p-[101px_95px]" >
                            <div className="flex flex-col gap-[32px] items-start">
                                <h4 className={`${H4}`}>ZX7 SPEAKER</h4>
                                <button className={`${ButtonStyle} bg-transparent! border-[1px] border-solid border-[#000000] text-[#000000]!`}>SEE PRODUCT</button>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <img src="/images/home/desktop/image-earphones-yx1.jpg" className="rounded-[8px] w-[540px]" alt="" />
                            <div className="w-[540px] p-[101px_95px] flex flex-col gap-[32px] items-start bg-[rgba(241,241,241,1)] rounded-[8px]">
                                <h4 className={`${H4}`}>YX1 EARPHONES</h4>
                                <button className={`${ButtonStyle} bg-transparent! border-[1px] border-solid border-[#000000] text-[#000000]!`}>SEE PRODUCT</button>
                            </div>
                        </div>
                    </div>
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
                    </div>
                </div>
                <footer className="w-[100%] bg-[rgba(16,16,16,1)] flex justify-center mt-[200px] pb-[32px]">
                    <div className="w-[1110px] flex flex-col">
                    <span className="w-[101px] h-[4px] bg-[rgba(216,125,74,1)] mb-[75px]"></span>
                        <div className="flex justify-between items-center">
                            <img src="/images/shared/desktop/logo.svg" alt="" />
                            <nav>
                                <ul className="flex gap-[32px]">
                                    {navHeader.map((e, i) => {
                                        return <li onClick={() => navigate(e)} className={`${SubTitle} tracking-[2px] text-[rgba(255,255,255,1)] cursor-pointer`} key={i}>{e.toUpperCase()}</li>
                                    })}
                                </ul>
                            </nav>
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
                </footer>
            </div>
        </>
    )
}
