import tailwind from "../../styles/tailwind"

export default function SectionTwo() {

    const { H1, P, ButtonStyle, H4 } = tailwind()

    return (
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
        </div>)
}
