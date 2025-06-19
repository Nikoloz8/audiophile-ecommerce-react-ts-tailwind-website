import { useParams } from "react-router-dom"
import data from "../../data.json"
import tailwind from "../../styles/tailwind"

export default function RenderDevices() {

    const filteredData = data.filter((e) => e.category === category).sort((a, b) => b.id - a.id)
    const { Overline, P, ButtonStyle, H2 } = tailwind()
    const { category } = useParams()

    return filteredData.map((e, i) => {
        return <div key={i} className={`flex justify-between flex-row-reverse items-center ${i % 2 === 0 ? "flex-row!" : ""}`}>
            <img src={e.image.desktop} className="w-[540px]" alt="" />
            <div className="flex flex-col max-w-[445px] gap-[32px]">
                <div className="flex flex-col gap-[16px]">
                    {e.new ? <h4 className={`${Overline} text-[rgba(216,125,74,1)]`}>NEW PRODUCT</h4> : undefined}
                    <h2 className={`${H2}`}>{e.name.toUpperCase()}</h2>
                </div>
                <div className="flex flex-col gap-[40px] items-start">
                    <p className={`${P} text-[rgba(0,0,0,0.5)]`}>{e.description}</p>
                    <button className={`${ButtonStyle}`}>
                        SEE PRODUCT
                    </button>
                </div>
            </div>
        </div>
    })
}

