import { useNavigate } from "react-router-dom"
import tailwind from "../../styles/tailwind"

export default function SectionOne() {

    const {Overline, H1, P, ButtonStyle} = tailwind()
    const navigate = useNavigate()

    return (
        <section className="flex flex-col gap-[40px] max-w-[400px] items-start">
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
            <button onClick={() => navigate('/details/headphones/4')} className={`${ButtonStyle}`}>
                SEE PRODUCT
            </button>
        </section>)
}
